document.addEventListener('DOMContentLoaded', () => {
  const intro = document.getElementById('intro');
  const portfolio = document.getElementById('portfolio');
  const btn = document.getElementById('btn-portfolio');
  const grid = document.querySelector('.grid');
  const fs = document.getElementById('fullscreen');
  const fsImg = fs.querySelector('img');

  // لیست تصاویر نمونه‌کار
  const samples = [
    'Daneh-Coffee-Shop.jpg',
    'Eid-20-Free-Post.jpg',
    'Full-Internet-Pack.jpg',
    'Herat-Universit_2y (2).jpg',
    'Markaz-Amozishe-Honarsarah.png',
    'Muslim-Youth---DEL-CEL-Math-Computer.jpg',
    'Nebula-Zong-Gaming-Clup.jpg',
    'PRVIEW.Muslim-Youth-Academy_2.jpg',
    'Resturant.jpg',
    'Siminar-Amozishi---Naqshah-Rah-Tejarat-Movafaq.jpg',
    'SKALOT-ACADEMY.jpg',
    'Social-AD-Post-ICDL-Omid-Afganistan.jpg',
    'Start-with-one-Step.jpg',
    'try_12.jpg',
    'Web-Design.jpg',
    'Acadmey-Amozes-Asan---Amozesh-Englisi.jpg',
    'Vision-Graphix-Eid.jpg',
  ];

  // ساخت گالری
  samples.forEach(name => {
    const img = document.createElement('img');
    img.src = `samplesV1/${name}`;
    img.alt = name;
    img.loading = 'lazy';
    img.addEventListener('click', () => {
      fsImg.src = img.src;
      fs.classList.remove('hidden');
    });
    grid.appendChild(img);
  });

  // نمایش بخش نمونه‌کارها
  btn.addEventListener('click', () => {
    portfolio.classList.remove('hidden');
    portfolio.scrollIntoView({ behavior: 'smooth' });
  });

  // بستن fullscreen با کلیک بیرونی
  fs.addEventListener('click', e => {
    if (e.target === fs) {
      fs.classList.add('hidden');
      fsImg.src = '';
    }
  });

  // بستن با کلید Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      fs.classList.add('hidden');
      fsImg.src = '';
    }
  });

  // ذرات متحرک مثلثی
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function initParticles() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
    particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      size: Math.random() * 6 + 4,
      speed: Math.random() * 0.5 + 0.2,
      angle: Math.random() * Math.PI * 2
    }));
  }

  function drawParticles() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.beginPath();
      ctx.moveTo(0, -p.size);
      ctx.lineTo(p.size, p.size);
      ctx.lineTo(-p.size, p.size);
      ctx.closePath();
      ctx.fillStyle = 'rgba(0,170,255,0.7)';
      ctx.fill();
      ctx.restore();

      p.y -= p.speed;
      p.angle += 0.01;
      if (p.y < -p.size) p.y = H + p.size;
    });
    requestAnimationFrame(drawParticles);
  }

  initParticles();
  drawParticles();
  window.addEventListener('resize', initParticles);
});

// script.js
document.addEventListener('DOMContentLoaded',()=> {
  const intro = document.getElementById('intro');
  const port = document.getElementById('portfolio');
  const btn = document.getElementById('btn-portfolio');
  const grid = document.querySelector('.grid');
  const fs = document.getElementById('fullscreen');
  const fsImg = fs.querySelector('img');
  const closeBtn = document.getElementById('close-full');

  // آدرس نمونه‌کارها
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
  ];

  // بارگذاری گالری
  samples.forEach(name=>{
    const img = document.createElement('img');
    img.src = `samplesV1/${name}`;
    img.alt = name;
    img.addEventListener('click',()=>{
      fsImg.src = img.src; fs.classList.remove('hidden');
    });
    grid.appendChild(img);
  });

  // نمایش گالری
  btn.addEventListener('click',()=>{
    port.classList.remove('hidden');
    port.scrollIntoView({behavior:'smooth'});
  });
  closeBtn.addEventListener('click',()=> fs.classList.add('hidden'));

  // فشار Esc برای بستن
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape') fs.classList.add('hidden');
  });

  // PARTICLES (triangles)
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  let W, H, parts=[];
  function init() {
    W=canvas.width=window.innerWidth;
    H=canvas.height=window.innerHeight;
    parts = Array.from({length:60},()=>{
      return {
        x: Math.random()*W,
        y: Math.random()*H,
        size: Math.random()*6+4,
        speed: Math.random()*0.5+0.2,
        angle: Math.random()*Math.PI*2
      };
    });
  }
  function draw() {
    ctx.clearRect(0,0,W,H);
    parts.forEach(p=>{
      ctx.save();
      ctx.translate(p.x,p.y);
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
      if(p.y < -p.size) p.y = H + p.size;
    });
    requestAnimationFrame(draw);
  }
  init(); draw();
  window.addEventListener('resize', init);
});

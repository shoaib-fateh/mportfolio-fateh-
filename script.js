document.addEventListener('DOMContentLoaded', () => {
    const viewPortfolioBtn = document.getElementById('view-portfolio');
    const portfolioSection = document.getElementById('portfolio');
    const fullscreen = document.getElementById('fullscreen');
    const fullscreenImg = document.getElementById('fullscreen-img');
    const closeFullscreen = document.getElementById('close-fullscreen');
    const galleryImages = document.querySelectorAll('.gallery img');

    viewPortfolioBtn.addEventListener('click', () => {
        portfolioSection.classList.remove('hidden');
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
    });

    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            fullscreenImg.src = img.src;
            fullscreen.classList.remove('hidden');
        });
    });

    closeFullscreen.addEventListener('click', () => {
        fullscreen.classList.add('hidden');
    });
});

// پارتیکلز مثلثی
const particles = document.querySelector('.particles');
for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = '0';
    particle.style.height = '0';
    particle.style.borderLeft = '5px solid transparent';
    particle.style.borderRight = '5px solid transparent';
    particle.style.borderBottom = '10px solid #00aaff';
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animation = `float ${Math.random() * 10 + 5}s linear infinite`;
    particles.appendChild(particle);
}
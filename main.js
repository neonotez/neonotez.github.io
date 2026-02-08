document.getElementById('launchApp').addEventListener('click', () => {
  window.open('https://neonotex.github.io', '_blank');
});

document.getElementById('sourceCode').addEventListener('click', () => {
  window.open('https://github.com/Neonotex/neonotex.github.io', '_blank');
});


document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const titleEl = document.querySelector('.slide-title');
  const descEl = document.querySelector('.slide-desc');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    const currentSlide = slides[index];
    titleEl.textContent = currentSlide.dataset.title;
    descEl.textContent = currentSlide.dataset.desc;
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });

  showSlide(currentIndex);
});

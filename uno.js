let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  if (index >= totalSlides) currentSlide = 0;
  if (index < 0) currentSlide = totalSlides - 1;

  const offset = -currentSlide * 100;
  document.querySelector('.slider-container').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  currentSlide++;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  showSlide(currentSlide);
}

document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);
});
const carouselSlide = document.querySelector('.carousel-slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const images = document.querySelectorAll('.carousel-slide img');

let counter = 0;
const size = images[0].clientWidth;
const intervalTime = 5000; // Cambiar imagen cada 5 segundos

function slideNext() {
  if (counter >= images.length - 1) return;
  counter++;
  carouselSlide.style.transition = 'transform 0.5s ease-in-out';
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
}

function slidePrev() {
  if (counter <= 0) return;
  counter--;
  carouselSlide.style.transition = 'transform 0.5s ease-in-out';
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
}

nextBtn.addEventListener('click', () => {
  slideNext();
  clearInterval(slideInterval);
  slideInterval = setInterval(slideNext, intervalTime);
});

prevBtn.addEventListener('click', () => {
  slidePrev();
  clearInterval(slideInterval);
  slideInterval = setInterval(slideNext, intervalTime);
});

let slideInterval = setInterval(slideNext, intervalTime);

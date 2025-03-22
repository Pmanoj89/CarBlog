 const URL(`https://api.api-ninjas.com/v1/cars?limit=2&model=camry`); 
const carouselInner = document.querySelector('.carousel-inner');
console.log(carouselInner);

const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');
let currentIndex = 0;

function updateCarousel() {
  const offset = -currentIndex * 100;
  carouselInner.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
  updateCarousel();
});

// Auto-play Carousel
setInterval(() => {
  currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
  updateCarousel();
}, 5000);
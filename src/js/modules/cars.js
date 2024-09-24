import { createCatalogSwiper } from './swiper';

const dataUrl = 'backend/products.json';
const swiperWrapper = document.getElementById('swiper-wrapper');
const popularCarsList = document.querySelector('.popular-cars__list');
const searchInput = document.querySelector('.search-catalog__input');

function createCarCard(car) {
  return `
    <div class="swiper-slide">
      <article class="card">
        <a href="#product-page" class="card__link"></a>
        <div class="card__photo">
          <img src="../../img/cars/car-${car.image}.jpg" alt="car-image">
        </div>
        <div class="card__body">
          <h2 class="card__title title-2">${car.name}</h2>
          <div class="card__footer">
            <div class="card__info">
              <div class="card__label">Starting at</div>
              <div class="card__price" data-value="$">${car.price}/day</div>
            </div>
            <button class="card__btn button-primary">Rent</button>
          </div>
        </div>
      </article>
    </div>
  `;
}

function createPopularCarCard(car) {
  return `
    <article class="popular-car-card">
      <a href="#product-page" class="popular-car-card__link"></a>
      <div class="popular-car-card__image">
        <img src="../../img/cars/car-${car.image}.jpg" alt="car-image">
      </div>
      <div class="popular-car-card__content">
        <p class="popular-car-card__name">${car.name}</p>
        <p class="popular-car-card__price" data-value="$">${car.price}/day</p>
      </div>
    </article>
  `;
}

export function loadCars() {
  if (!swiperWrapper || !popularCarsList) {
    return;
  }

  fetch(dataUrl)
    .then(response => response.json())
    .then(data => {
      const carCards = data.map(createCarCard).join('');
      swiperWrapper.innerHTML = carCards;

      createCatalogSwiper();
      
      const popularCars = data
        .sort((a, b) => b.orders - a.orders)
        .slice(0, 4);

      const popularCarCards = popularCars.map(createPopularCarCard).join('');
      popularCarsList.innerHTML = popularCarCards;

      searchInput.addEventListener('input', () => {
        filterCars(data);
      });
    })
    .catch(error => {
      console.error('Error fetching or parsing JSON data:', error);
    });
}

function filterCars(data) {
  const searchTerm = searchInput.value.toLowerCase();

  // Filter the cars based on the search term
  const filteredCars = data.filter(car => 
    car.name.toLowerCase().includes(searchTerm) ||
    car.price.toString().includes(searchTerm) // If you want to search by price too
  );

  // Update the swiper with filtered cars
  const carCards = filteredCars.map(createCarCard).join('');
  swiperWrapper.innerHTML = carCards;

  // Reinitialize the swiper to update the slides
  createCatalogSwiper();
}
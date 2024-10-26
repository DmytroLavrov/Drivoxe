import scrollAnimation from "../utils/scrollAnimation";

function renderCarPage() {
  if (!window.location.pathname.includes('car-page')) {
    return;
  }

  document.addEventListener('DOMContentLoaded', () => {
    const carSection = document.querySelector('.car');
  
    const urlParams = new URLSearchParams(window.location.search);
    const carId = urlParams.get('id');   
  
    function renderCar(car) {
      const mainImageHTML = `
        <div class="car__main-image anim">
          <picture>
            <source srcset="${car.images.main}.webp 1x, ${car.images.main}@2x.webp 2x" type="image/webp">
            <source srcset="${car.images.main}.jpg 1x, ${car.images.main}@2x.jpg 2x" type="image/jpg">
            <img src="${car.images.main}.jpg" alt="${car.name}">
          </picture>
        </div>
      `;
  
      const otherImagesHTML = car.images.other.length > 0 ? `
        <div class="car__other-images">
          ${car.images.other.map((imgSrc, index) => `
            <picture>
              <source srcset="${imgSrc}.webp 1x, ${imgSrc}@2x.webp 2x" type="image/webp">
              <source srcset="${imgSrc}.jpg 1x, ${imgSrc}@2x.jpg 2x" type="image/jpg">
              <img class="car__other-image car__other-image--0${index + 1} anim" src="${imgSrc}.jpg" alt="other-image-${index + 1}">
            </picture>
          `).join('')}
        </div>
      ` : '';
  
      const specsHTML = car.specs.map(spec => `
        <li class="car__specs-item">
          <svg class="icon icon--spec icon--${spec.icon}">
            <use href="./img/svgsprite/sprite.symbol.svg#${spec.icon}"></use>
          </svg>
          <p>${spec.detail}</p>
        </li>
      `).join('');
  
      const colorsHTML = car.colors.map(color => `
        <label>
          <input type="radio" name="car-color" class="car-color__radio">
          <div class="car-color__radio-fake car-color__radio-fake--${color}"></div>
        </label>
      `).join('');
  
      carSection.innerHTML = `
        <div class="car-container container">
          <div class="car__images-container">
            ${mainImageHTML}
            ${otherImagesHTML}
          </div>
          <div class="car__details anim">
            <div class="car__info">
              <h1 class="car__title title-1">${car.name}</h1>
              <div class="car__price">
                <p>Starting at </p>
                <span>$${car.price}/day</span>
              </div>
              <p class="car__description desc-1">${car.description}</p>
            </div>
            <div class="car__actions">
              <div class="car__quantity">
                <button class="car__quantity-decrease">
                  <img src="./../../img/car-page/minus.png" alt="minus">
                </button>
                <div class="car__value">1</div>
                <button class="car__quantity-increase">
                  <img src="./../../img/car-page/plus.png" alt="plus">
                </button>
              </div>
              <button class="car__book-btn button-primary">Book Now</button>
            </div>
            <div class="car__specs">
              <h3 class="car__specs-title">Specifications</h3>
              <ul class="car__specs-list">
                ${specsHTML}
              </ul>
            </div>
            <div class="car__colors">
              <h3 class="car__colors-title">In color</h3>
              <div class="car__color-options">
                ${colorsHTML}
              </div>
            </div>
          </div>
        </div>
      `;

      renderCarFeatures(car.features);

      function renderCarFeatures(features) {
        const featuresHTML = features.map(feature => `
          <div class="car-features__item">
            <h3 class="car-features__item-title title-3">${feature.title}</h3>
            <p class="car-features__item-description desc-1">${feature.description}</p>
          </div>
        `).join('');
  
        const carFeaturesSection = `
          <section class="car-features">
            <div class="car-features__container container">
              <h2 class="car-features__title anim">Car Features</h2>
              <div class="car-features__list anim">
                ${featuresHTML}
              </div>
            </div>
          </section>
        `;
  
        carSection.insertAdjacentHTML('afterend', carFeaturesSection);
      }
    }
  
    // Завантаження даних із JSON
    fetch('backend/products.json')
      .then(response => response.json())
      .then(products => {
        const car = products.find(product => product.id === carId);
        
        if (car) {
          renderCar(car);
          scrollAnimation();
        } else {
          console.error('Car not found');
        }
      })
      .catch(error => console.error('Error fetching product data:', error));
  });  
}

export { renderCarPage };
import { createCatalogSwiper } from "./swiper";
import { loadPopularCars } from "./popularCars";

function setupCatalogSwiper() {
  const catalogSwiper = createCatalogSwiper();

  function getCardsPerSlide() {
    if (window.innerWidth <= 481) {
      return 3;
    } else if (window.innerWidth <= 1220) {
      return 4;
    } else {
      return 9;
    }
  }

  let products = [];
  let cardsPerSlide = getCardsPerSlide();
  let filteredProducts = [];

  fetch('backend/products.json')
    .then(response => response.json())
    .then(data => {
      products = data;
      filteredProducts = products;
      renderSlides(filteredProducts);
    })
    .catch(error => console.error('Error loading products:', error));

  function renderSlides(productsToRender) {
    const slidesContainer = document.getElementById('swiper-wrapper');
  
    slidesContainer.innerHTML = '';
  
    if (productsToRender.length === 0) {
      const noResultsMessage = document.createElement('p');
      noResultsMessage.textContent = 'No products found.';
      slidesContainer.appendChild(noResultsMessage);
      document.querySelector('.catalog .swiper-pagination')
        .style.setProperty('display', 'none', 'important');
      catalogSwiper.disable(); 
      return;
    }

    document.querySelector('.catalog .swiper-pagination')
      .style.setProperty('display', 'inline-flex', 'important');
    catalogSwiper.enable(); 

    for (let i = 0; i < productsToRender.length; i += cardsPerSlide) {
      const slide = document.createElement('div');
      slide.classList.add('swiper-slide');
  
      const grid = document.createElement('div');
      grid.classList.add('swiper-custom-grid');
  
      for (let j = i; j < i + cardsPerSlide && j < productsToRender.length; j++) {
        const product = productsToRender[j];
        const card = createProductCard(product);
        grid.appendChild(card);
      }
  
      slide.appendChild(grid);
      slidesContainer.appendChild(slide);
    }
  
    catalogSwiper.update();

    updateCatalogResults(1, Math.min(cardsPerSlide, productsToRender.length));
  }

  function updateCatalogResults(startIndex, endIndex) {
    const catalogResults = document.querySelector('.catalog__results p');
    catalogResults.textContent = `Showing ${startIndex}-${endIndex} of ${products.length} results`;
  }

  catalogSwiper.on('slideChange', () => {
    const currentSlideIndex = catalogSwiper.activeIndex;
    const startIndex = currentSlideIndex * cardsPerSlide + 1;
    const endIndex = Math.min(startIndex + cardsPerSlide - 1, products.length);
    updateCatalogResults(startIndex, endIndex);
  });
    
  function createProductCard(product) {
    const card = document.createElement('article');
    card.classList.add('card');

    card.innerHTML = `
      <a href="car-page.html?id=${product.id}" class="card__link"></a>
      <div class="card__photo">
        <img src="${product.images.main}.jpg" alt="car-image">
      </div>
      <div class="card__body">
        <h2 class="card__title title-2">${product.name}</h2>
        <div class="card__footer">
          <div class="card__info">
            <div class="card__label">Starting at</div>
            <div class="card__price" data-value="$">${product.price}/day</div>
          </div>
          <button class="card__btn button-primary">Rent</button>
        </div>
      </div>
    `;

    return card;
  }

  const categoryLinks = document.querySelectorAll('.categories__item a');
  const sortSelect = document.getElementById('sort');

  function updateFilteredProducts() {
    let currentFilteredProducts = [...products];

    const selectedCategory = [...categoryLinks].find(link => link.classList.contains('active'));
    if (selectedCategory && selectedCategory.textContent.trim() !== 'All Categories') {
      currentFilteredProducts = currentFilteredProducts.filter(product => product.category === selectedCategory.textContent.trim());
    }

    if (sortSelect) {
      const sortOption = sortSelect.value;

      if (sortOption === 'price-asc') {
        currentFilteredProducts.sort((a, b) => a.price - b.price);
      } else if (sortOption === 'price-desc') {
        currentFilteredProducts.sort((a, b) => b.price - a.price);
      }
    }

    renderSlides(currentFilteredProducts);
  }

  categoryLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      categoryLinks.forEach(l => l.classList.remove('active'));

      link.classList.add('active');

      updateFilteredProducts();
    });
  });

  if (sortSelect) {
    sortSelect.addEventListener('change', updateFilteredProducts);  
  }

  const searchForm = document.querySelector('.search-catalog');
  if (searchForm) {
    searchForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const searchInput = document.querySelector('.search-catalog__input').value.toLowerCase();
    
      if (searchInput === '') {
        renderSlides(products);
        return;
      }
    
      const filteredProducts = products.filter(product => 
        product.name.toLowerCase().startsWith(searchInput)
      );
    
      renderSlides(filteredProducts);
    });    
  }  

  window.addEventListener('resize', () => {
    const newCardsPerSlide = getCardsPerSlide();
    if (newCardsPerSlide !== cardsPerSlide) {
      cardsPerSlide = newCardsPerSlide;
      renderSlides(filteredProducts);
    }
  });

  loadPopularCars();
}

export { setupCatalogSwiper };

function loadPopularCars() {
  fetch('backend/products.json')
    .then(response => response.json())
    .then(data => {
      renderPopularCars(data);
    })
    .catch(error => console.error('Error loading popular cars:', error));
}

function renderPopularCars(products) {
  const popularCarsList = document.querySelector('.popular-cars__list');

  if (!popularCarsList) {
    return;
  }

  const sortedProducts = products.sort((a, b) => b.orders - a.orders);
  const topProducts = sortedProducts.slice(0, 4);

  popularCarsList.innerHTML = '';

  topProducts.forEach(product => {
    const card = createPopularCarCard(product);
    popularCarsList.appendChild(card);
  });
}

function createPopularCarCard(product) {
  const card = document.createElement('div');
  card.classList.add('popular-car-card');

  card.innerHTML = `
    <a href="car-page.html?id=${product.id}" class="popular-car-card__link"></a>
    <div class="popular-car-card__image">
      <img src="${product.images.main}.jpg" alt="car-image">
    </div>
    <div class="popular-car-card__content">
      <p class="popular-car-card__name">${product.name}</p>
      <p class="popular-car-card__price" data-value="$">$${product.price}/day</p>
    </div>
  `;

  return card;
}

export { loadPopularCars };

import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';

function swiper() {
  const carsSwiper = new Swiper('.cars-swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        const formattedIndex = (index + 1).toString().padStart(2, '0');
        return '<span class="' + className + '">' + formattedIndex + '</span>';
      }
    },
    
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
        grid: {
          rows: 3
        }
      },
      481: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
        grid: {
          rows: 2
        }
      },
      820: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 48,
        grid: {
          rows: 2
        }
      }
    }
  });
  
  const testimonialsSwiper = new Swiper('.testimonials-swiper', {
    navigation: {
      nextEl: '#sliderNext',
      prevEl: '#sliderPrev',
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  const carsSimilarSwiper = new Swiper('.cars-similar-swiper', {
    navigation: {
      nextEl: '#sliderNext',
      prevEl: '#sliderPrev',
    },

    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
    
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 35,
      },
      380: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 35,
      },
      650: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 35,
      },
      821: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 35,
      },
      1221: {
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 35,
      }
    }
  });
}

export function createCatalogSwiper() {
  const catalogSwiper = new Swiper('.catalog-swiper', {
    slidesPerView: 1,
    spaceBetween: 48,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      }
    },
    breakpoints: {
      0: {
        spaceBetween: 20,
      },
      820: {
        spaceBetween: 48,
      },
      992: {
        spaceBetween: 28,
      },
      1275: {
        spaceBetween: 48,
      }
    }
  });

  return catalogSwiper;
}

export default swiper;
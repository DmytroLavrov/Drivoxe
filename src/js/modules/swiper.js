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
      320: {
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
}

export default swiper;
// Mobile navigation
import mobileNav from './modules/mobile-nav.js';
mobileNav();

// Animation on scroll
import scrollAnimation from './utils/scrollAnimation.js';
scrollAnimation();

// Footer-scroll-top
import scrollTop from './utils/scroll-top.js';
scrollTop();

// Swiper
import('./modules/swiper.js').then(({ default: swiper }) => swiper());

// load cars for catalog
import('./modules/catalogCars.js').then(({ setupCatalogSwiper }) => setupCatalogSwiper());
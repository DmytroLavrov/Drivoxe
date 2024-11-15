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

// Render car-page
import { renderCarPage } from './modules/renderCarPage.js';
renderCarPage();

// Gallery and lightboxes by Fancybox
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

Fancybox.bind('[data-fancybox]', {
	// Your custom options
});
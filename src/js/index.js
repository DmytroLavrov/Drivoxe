// Swiper
import('./modules/swiper.js').then(({ default: swiper }) => swiper());

// Info-dot
import { infoDot, infoDotHoverAbout, infoDotHover } from './modules/info-dot.js';
// Initialize dots in the hero section
infoDot('.hero');
// Initialize dots in the values section
infoDot('.values');
// Initialize the hover dots in the steps ​​section
infoDotHover('.steps');
// Initialize the hover dots in the steps ​​section
infoDotHoverAbout('.steps-about');

// Галерея и лайтбоксы от Fancybox
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

Fancybox.bind('[data-fancybox]', {
	// Your custom options
});

// load cars for catalog
import('./modules/cars.js').then(({ setupCatalogSwiper }) => setupCatalogSwiper());

// Render car-page
import { renderCarPage } from './modules/car-page.js';
renderCarPage();

// Initialize the FAQ accordion
import { faqAccordionToggle } from './modules/faq-accordion.js';
faqAccordionToggle();

// Swap blocks
import swapBlocks from './utils/swap-blocks.js';
swapBlocks();

// Animation on scroll
import scrollAnimation from './utils/scrollAnimation.js';
scrollAnimation();

// Update step-content class
import { handleStepContentClass } from './utils/updateStepContentClass.js';
handleStepContentClass();

// Footer-scroll-top
import scrollTop from './utils/scroll-top.js';
scrollTop();

// Mobile navigation
import mobileNav from './modules/mobile-nav.js';
mobileNav();
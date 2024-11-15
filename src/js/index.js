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

// Info-dot
import { infoDot, infoDotHover } from './modules/info-dot.js';
// Initialize dots in the hero section
infoDot('.hero');
// Initialize dots in the values section
infoDot('.values');
// Initialize the hover dots in the steps ​​section
infoDotHover('.steps');

// Swap blocks
import swapBlocks from './utils/swap-blocks.js';
swapBlocks();

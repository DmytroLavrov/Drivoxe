// Swiper
import swiper from './modules/swiper.js';
swiper();

// Info-dot
import { infoDot } from './modules/info-dot.js';
import { infoDotHover } from './modules/info-dot.js';
// Initialize dots in the header section
infoDot('.header');
// Initialize dots in the values section
infoDot('.values');
// Initialize the hover dots in the values ​​section
infoDotHover('.steps');

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
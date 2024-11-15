// Mobile navigation
import mobileNav from './modules/mobile-nav.js';
mobileNav();

// Animation on scroll
import scrollAnimation from './utils/scrollAnimation.js';
scrollAnimation();

// Footer-scroll-top
import scrollTop from './utils/scroll-top.js';
scrollTop();

// Info-dot
import { infoDotHoverAbout } from './modules/info-dot.js';
// Initialize the hover dots in the steps ​​section
infoDotHoverAbout('.steps-about');

// Update step-content class
import { handleStepContentClass } from './utils/updateStepContentClass.js';
handleStepContentClass();

function scrollTop() {
  // Footer-btn for scroll up
  document.querySelector('.footer__scroll-top').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Automatic scrolling up
  window.addEventListener('load', () => {
    window.scrollTo(0, 0);
  });
}

export default scrollTop;
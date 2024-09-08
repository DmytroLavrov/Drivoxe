function swapBlocks() {
  const peopleContent = document.querySelector('.people__content');
  const heroRight = document.querySelector('.hero__right');
  const learnMore = document.querySelector('.learn-more');
  
  function adjustBlocks() {
    if (peopleContent && heroRight && learnMore) {
      if (window.innerWidth <= 1220) {
        if (!peopleContent.contains(learnMore) && heroRight.contains(learnMore)) {
          heroRight.removeChild(learnMore);
          peopleContent.appendChild(learnMore);
        }
      } else {
        if (peopleContent.contains(learnMore)) {
          peopleContent.removeChild(learnMore);
          heroRight.appendChild(learnMore);
        }
      }
    }
  }
  
  adjustBlocks();
  
  window.addEventListener('resize', adjustBlocks);
}

export default swapBlocks;
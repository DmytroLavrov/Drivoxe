function swapBlocks() {
  const peopleContent = document.querySelector('.people__content');
  const headerRight = document.querySelector('.header__right');
  const learnMore = document.querySelector('.learn-more');
  
  function adjustBlocks() {
    if (window.innerWidth <= 1220) {
      if (!peopleContent.contains(learnMore) && headerRight.contains(learnMore)) {
        headerRight.removeChild(learnMore);
        peopleContent.appendChild(learnMore);
      }
    } else {
      if (peopleContent.contains(learnMore)) {
        peopleContent.removeChild(learnMore);
        headerRight.appendChild(learnMore);
      }
    }
  }
  
  adjustBlocks();
  
  window.addEventListener('resize', adjustBlocks);
}

export default swapBlocks;
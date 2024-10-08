function scrollAnimation() {
  const anim = document.querySelectorAll('.anim');

  if (anim.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
      for (let index = 0; index < anim.length; index++) {
        const animItem = anim[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top
        const animStart = 4;
        
        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
          animItem.classList.add('active');
        } else {
          if (!animItem.classList.contains('anim')) {
            animItem.classList.remove('active');
          }
        }
      }
    }

    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    
    animOnScroll();
  }
}

export default scrollAnimation;
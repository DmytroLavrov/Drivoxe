export function handleStepContentClass() {
  function updateClass() {
    const steps = document.querySelectorAll('.step__content');
  
    steps.forEach((stepContent) => {
      if (window.innerWidth <= 820) {
        stepContent.classList.add('step__content--open');
      } else {
        stepContent.classList.remove('step__content--open');
      }
    });
  }

  updateClass();
  
  window.addEventListener('resize', updateClass);
}


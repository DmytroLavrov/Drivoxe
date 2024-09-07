// export default infoDot;

function infoDot(selector) {
  const section = document.querySelector(selector);
  if (!section) return;

  const infoBtns = section.querySelectorAll('.info-dot');
  const infoHints = section.querySelectorAll('.info-hint');
  
  infoBtns.forEach((infoBtn) => {
    infoBtn.addEventListener('click', function(e) {
      e.stopPropagation();

      infoHints.forEach((infoHint) => {
        if (this.parentNode.querySelector('.info-hint') !== infoHint) {
          infoHint.classList.add('none');
        }        
      });

      this.parentNode.querySelector('.info-hint').classList.toggle('none');
    });
  });

  document.addEventListener('click', closeHints);

  function closeHints() {
    infoHints.forEach((infoHint) => {
      infoHint.classList.add('none');
    });
  }

  infoHints.forEach((infoHint) => {
    infoHint.addEventListener('click', (e) => e.stopPropagation());
  });
}

function infoDotHover(selector) {
  const section = document.querySelector(selector);
  if (!section) return;
  
  const infoBtns = section.querySelectorAll('.info-dot');

  infoBtns.forEach((infoBtn) => {
    infoBtn.addEventListener('mouseover', function(e) {
      e.stopPropagation();

      this.parentNode.parentNode.querySelector('.step__content')
        .classList.add('step__content--open');

      this.parentNode.parentNode.querySelector('.step__icon')
        .classList.add('step__icon--open');

      this.parentNode.parentNode.querySelector('.icon--timeline-icon')
        .classList.add('icon--timeline-open');
    });

    infoBtn.addEventListener('mouseout', function(e) {
      e.stopPropagation();

      this.parentNode.parentNode.querySelector('.step__content')
        .classList.remove('step__content--open');

      this.parentNode.parentNode.querySelector('.step__icon')
        .classList.remove('step__icon--open');

      this.parentNode.parentNode.querySelector('.icon--timeline-icon')
        .classList.remove('icon--timeline-open');
    });
  });
}

export { infoDot, infoDotHover };
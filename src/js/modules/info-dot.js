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

function infoDotHoverAbout(selector) {
  const section = document.querySelector(selector);
  if (!section) return;

  const infoBtns = section.querySelectorAll('.info-dot');
  const topContent = document.querySelectorAll('.timeline__section--top .step__content');
  const bottomContent = document.querySelectorAll('.timeline__section--bottom .step__content');

  if (infoBtns.length < 4 || topContent.length < 2 || bottomContent.length < 2) {
    console.error('Not enough info dots or content elements.');
    return;
  }

  const mappings = [topContent[0], bottomContent[0], topContent[1], bottomContent[1]];

  infoBtns.forEach((infoBtn, index) => {
    const content = mappings[index];
    if (!content) return;

    const icon = content.parentNode.querySelector('.step__icon');
    const timelineIcon = content.parentNode.querySelector('.icon--timeline-icon');

    const toggleClasses = (add) => {
      content.classList.toggle('step__content--open', add);
      icon.classList.toggle('step__icon--open', add);
      timelineIcon.classList.toggle('icon--timeline-open', add);
    };

    infoBtn.addEventListener('mouseover', () => toggleClasses(true));
    infoBtn.addEventListener('mouseout', () => toggleClasses(false));
  });
}


export { infoDot, infoDotHover, infoDotHoverAbout };
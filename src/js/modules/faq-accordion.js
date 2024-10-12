function faqAccordionToggle() {
  const faqs = document.querySelectorAll('.faq-accordion__item');

  faqs.forEach(faq => {
    faq.addEventListener('click', () => {
      const faqActive = faq.classList.toggle('faq-active');
      let faqAnswer = faq.querySelector('.faq-accordion__answer');
      let faqIcon = faq.querySelector('.icon');
      let faqIconUse = faq.querySelector('.faq-accordion__arrow use');

      if (faqActive) {
        faqAnswer.classList.remove('none');
        faqIcon.classList.remove('icon--faq-arrow-down');
        faqIcon.classList.add('icon--faq-arrow-up');
        faqIconUse.setAttribute('href', './img/svgsprite/sprite.symbol.svg#faq-arrow-up');
      } else {
        faqAnswer.classList.add('none');
        faqIcon.classList.remove('icon--faq-arrow-up');
        faqIcon.classList.add('icon--faq-arrow-down');
        faqIconUse.setAttribute('href', './img/svgsprite/sprite.symbol.svg#faq-arrow-down');
      }
    });
  })
}

export { faqAccordionToggle };
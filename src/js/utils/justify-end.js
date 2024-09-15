function justifyEnd() {
  const steps = document.querySelectorAll('.steps-about__step');
  const totalSteps = steps.length;
  const halfSteps = Math.ceil(totalSteps / 2);
  
  const lastSteps = Array.from(steps).slice(-halfSteps);
  
  lastSteps.forEach(step => {
    step.classList.add('justify-end');
  });
}

export default justifyEnd;
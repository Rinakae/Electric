const scrollUp = () => {
  const up = document.querySelector(".up");
  const servicesSection = document.querySelector(".services-section");

  const trackScroll = () => {
    let sd = servicesSection.getBoundingClientRect();    
    let top = sd.top;

    if (top < 0) {
      up.style.opacity = "1";
    } else {
      up.style.opacity = "0";
    }
  };

  const backToTop = () => {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -20);
      setTimeout(backToTop, 0);
    }
  };
 
  window.addEventListener('scroll', trackScroll);
  up.addEventListener('click', backToTop);
};

export default scrollUp;


"use strict";

const slider = () => {
 
  const slides = document.querySelectorAll(".item");
  
  let currentSlide = 0;

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };

  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };

  const autoPlaySlide = () => {
    prevSlide(slides, currentSlide, "item-active");
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    nextSlide(slides, currentSlide, "item-active");
  };
  const startSlide = (time = 3000) => {
    setInterval(autoPlaySlide, time);
  };

  startSlide(3000);
  
};

export default slider;
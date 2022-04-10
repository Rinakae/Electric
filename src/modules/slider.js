"use strict";

const slider = () => {
 
  const slides = document.querySelectorAll(".item");
  const table = document.querySelectorAll(".top-slider .table");

  table.forEach(item => {
    item.style.visibility = "visible";
    item.style.opacity = "1";

  });
  
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
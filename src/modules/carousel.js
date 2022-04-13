"use strict";
const carousel = () => {
  const carousel = document.querySelector(".services-elements");
  const list = carousel.querySelector(".services-carousel");
  const listElems = carousel.querySelectorAll('.col-sm-6');  
  const left = document.querySelector(".arrow-left");
  const right = document.querySelector(".arrow-right");

  const width = 400; 
  let count = 1;
  let position = 0;
  
  left.addEventListener("click", (e) => {        
    position += width * count;      
    position = Math.min(position, 0);
    list.style.marginLeft = position + 'px';    
  });

  right.addEventListener("click", (e) => {
    let windowWidth = window.innerWidth;
    position -= width * count;
    
    if (windowWidth < 995) {
      position = Math.max(position, -width * (listElems.length - 1));
      list.style.marginLeft = position + 'px';
    } else if ((windowWidth > 995) && (windowWidth < 1250)) {
      position = Math.max(position, -width * (listElems.length - 2));
      list.style.marginLeft = position + 'px';
    } else {
      position = Math.max(position, -width * (listElems.length - 3));
      list.style.marginLeft = position + 'px';
    } 
         
  }); 
 
};

export default carousel;
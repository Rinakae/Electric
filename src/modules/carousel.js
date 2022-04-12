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
  
  let i = 0;
  for(let item of carousel.querySelectorAll('.col-sm-6')) {
      item.style.position = 'relative';     
      i++;
    }
  left.addEventListener("click", (e) => {        
    position += width * count;      
    position = Math.min(position, 0);
    list.style.marginLeft = position + 'px';    
  });

  right.addEventListener("click", (e) => {
    position -= width * count;      
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';     
  }); 
 
};

export default carousel;
const accordion = () => {
  const accordeon = document.querySelector(".accordeon");
  const element = accordeon.querySelectorAll(".element");
  const elementContent = accordeon.querySelectorAll(".element-content");

  const openElement = ((elem, text) => {
    element.forEach(item => {
      item.classList.remove("active");
    });

    elementContent.forEach(item => {
      item.style.display = "none";
    });

    elem.classList.add("active");
    text.style.display = "block";
  });

  const closeElement = ((elem, text) => {
    elem.classList.remove("active");
    text.style.display = "none";
  });

  accordeon.addEventListener("click", (e) => {
    const target = e.target;
    
    if (target.classList.contains("title")) {

      const parent = target.closest(".element");
      const childElem = parent.querySelector(".element-content");

      if (parent.classList.contains("active")) {
        closeElement(parent, childElem);
      } else {
        openElement(parent, childElem);
      }      

    }
  });
};

export default accordion;

/*
element.forEach((elem, index) => {    
    
    elem.addEventListener("click", (e) => {
      
      elem.classList.toggle("active");

      let elementContent = elem.querySelector(".element-content");

      elementContent.style.display = "block";
      
      if (!elem.classList.contains("active")) {      
        elementContent.style.display = "none";
      }
    
    });   

  }); 
  */

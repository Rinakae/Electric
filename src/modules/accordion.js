const accordion = () => {
  const accordeon = document.querySelector(".accordeon");
  const element = accordeon.querySelectorAll(".element");

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
  
};



export default accordion;

//C:\Users\Admin\Desktop\electric
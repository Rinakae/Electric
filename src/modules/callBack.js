const collBack = () => {
  const buttonServices = document.querySelector(".button-services");
  const modalCallback = document.querySelector(".modal-callback");
  const modalOverlay = document.querySelector(".modal-overlay");
  const modalClose = document.querySelector(".modal-close"); 
    
    buttonServices.addEventListener("click", () => {      
      modalCallback.style.display = "block";
      modalOverlay.style.display = "block";       
    });

    modalClose.addEventListener("click", () => {
      modalCallback.style.display = "none";
      modalOverlay.style.display = "none";     
    }); 

    modalOverlay.addEventListener("click", () => {
      modalCallback.style.display = "none";
      modalOverlay.style.display = "none";     
    });  
  
};

export default collBack;
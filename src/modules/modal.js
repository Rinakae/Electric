const modal = () => {
  const callbackBtn = document.querySelectorAll(".callback-btn, .button-services");
  const modalCallback = document.querySelector(".modal-callback");
  const modalOverlay = document.querySelector(".modal-overlay");
  const modalClose = document.querySelector(".modal-close");
  const mobileMenu = document.querySelector(".mobile-menu");  
  
  callbackBtn.forEach(btn => {
    btn.addEventListener("click", () => {      
      modalCallback.style.display = "block";
      modalOverlay.style.display = "block";  
      mobileMenu.style.right = "-400px";    
    });

    modalClose.addEventListener("click", () => {
      modalCallback.style.display = "none";
      modalOverlay.style.display = "none";     
    }); 

    modalOverlay.addEventListener("click", () => {
      modalCallback.style.display = "none";
      modalOverlay.style.display = "none";     
    });
  });
}; 

export default modal;
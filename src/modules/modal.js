const modal = () => {
  const callbackBtn = document.querySelectorAll(".callback-btn");
  const modalCallback = document.querySelector(".modal-callback");
  const modalOverlay = document.querySelector(".modal-overlay");
  const modalClose = document.querySelector(".modal-close");
  
  callbackBtn.forEach(btn => {
    btn.addEventListener("click", () => {
      
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
  });
}; 

export default modal;
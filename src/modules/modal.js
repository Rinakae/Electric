const modal = () => {
  const callbackBtn = document.querySelectorAll(".callback-btn, .button-services");
  const modalCallback = document.querySelector(".modal-callback");
  const modalOverlay = document.querySelector(".modal-overlay");
  const modalClose = document.querySelector(".modal-close");
  const mobileMenu = document.querySelector(".mobile-menu");
  const cards = document.querySelectorAll(".col-sm-6");   
  
  function openModal() {
    modalCallback.style.display = "block";
    modalOverlay.style.display = "block";
    mobileMenu.style.right = "-400px"; 
  }

  function closeModal() {
    modalCallback.style.display = "none";
    modalOverlay.style.display = "none";  
  }
  
  callbackBtn.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();            
      openModal();          
    });
  });

  modalClose.addEventListener("click", (e) => {
    e.preventDefault();      
    closeModal();
  });

  modalOverlay.addEventListener("click", (e) => { 
    e.preventDefault();     
    closeModal(); 
  });

  cards.forEach(card => {
    card.addEventListener("click", (e) => {
      e.preventDefault();            
      openModal();
    });
  });

 
}; 

export default modal;


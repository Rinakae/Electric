const menu = () => {
  
    const topMenu = document.querySelector(".top-menu");
    const mobMenuBtn = document.querySelector(".mob-menu-btn");
    const mobileMenu = document.querySelector(".mobile-menu");
    const mobileMenuClose = document.querySelector(".mobile-menu-close");

    mobMenuBtn.addEventListener("click", (e) => {
      e.preventDefault();
      mobileMenu.style.right = "0px";      
    });

    mobileMenuClose.addEventListener("click", (e) => {
      e.preventDefault();
      mobileMenu.style.right = "-400px";      
    });

    function scroll(event) {
      if (event.target.closest('ul>li>a')) {         
        const anchor = event.target.getAttribute('href');        
        document.querySelector(anchor).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }   
    }

    topMenu.addEventListener("click", (e) => {
      e.preventDefault();
      scroll(e);      
    });

    mobileMenu.addEventListener("click", (e) => {
      e.preventDefault();
      scroll(e);      
      mobileMenu.style.right = "-400px"; 
    });

};

export default menu;
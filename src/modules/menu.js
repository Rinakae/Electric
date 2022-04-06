const menu = () => {
  
    const topMenu = document.querySelector(".top-menu");
    const mobMenuBtn = document.querySelector(".mob-menu-btn");
    const mobileMenu = document.querySelector(".mobile-menu");
    const mobileMenuClose = document.querySelector(".mobile-menu-close");

    mobMenuBtn.addEventListener("click", () => {      
      mobileMenu.style.right = "0px";      
    });

    mobileMenuClose.addEventListener("click", () => {
      mobileMenu.style.right = "-400px";      
    });

    topMenu.addEventListener("click", (e) => {
      if (e.target.closest('ul>li>a')) {
        e.preventDefault();      
        const anchor = e.target.getAttribute('href');        
        document.querySelector(anchor).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }   
    });

    mobileMenu.addEventListener("click", (e) => {
      if (e.target.closest('ul>li>a')) {
        e.preventDefault();      
        const anchor = e.target.getAttribute('href');        
        document.querySelector(anchor).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        mobileMenu.style.right = "-400px";
      }   
    });

};

export default menu;
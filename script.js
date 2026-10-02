const menuBtn=document.querySelector(".menu-btn");
const closeBtn=document.querySelector(".close-btn");
const mobileMenu=document.querySelector(".mobile-menu");


function setOpen(isOpen) {
    menuBtn.classList.toggle("active", isOpen);
    closeBtn.classList.toggle("active", isOpen);
    mobileMenu.classList.toggle("active", isOpen);
}

function toggleMenu() {
    setOpen(!mobileMenu.classList.contains("active"));
}
menuBtn.addEventListener("click",toggleMenu);
closeBtn.addEventListener("click",toggleMenu);

// Dropdowns

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((navItem) => {
  const navButton = navItem.querySelector(".nav-link");
  const dropdown = navItem.querySelector(".dropdown-items");
  
  if (navButton && dropdown) {
    navButton.addEventListener("click", () => { 
      dropdown.classList.toggle("dropdown-active"); 

      const downArrow = navButton.querySelector(".down-arrow");
      const upArrow = navButton.querySelector(".up-arrow");

      downArrow.classList.toggle("dropdown-active");
      upArrow.classList.toggle("dropdown-active");

    }); 
  } 
});



const desktopMedia = window.matchMedia("(min-width: 48rem)");


/* Close mobile-menu when switching to desktop */

desktopMedia.addEventListener("change", (event) => {
  if (event.matches) {
    setOpen(false);
  }
});


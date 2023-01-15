// Menu hambuerguesa
const menuBar = document.querySelector(".menu__bar");
menuBar.addEventListener("click", ()=>{
    document.querySelector(".line1__menu--bar").classList.toggle("activateline1__menu--bar");
    document.querySelector(".line2__menu--bar").classList.toggle("activateline2__menu--bar");
    document.querySelector(".line3__menu--bar").classList.toggle("activateline3__menu--bar");
    document.querySelector(".lista__menu").classList.toggle("activatelista__menu");
    if (document.querySelector(".activatelista__menu")) {
        document.querySelector(".main").style.opacity = "0.6";
        document.querySelector(".main").style.zIndex = "-1";
        window.addEventListener('scroll', disableScroll);
    } else {
        document.querySelector(".main").style.opacity = "1";
        document.querySelector(".main").style.zIndex = "1";
        window.removeEventListener('scroll', disableScroll);
    }
})

function disableScroll(){  
    window.scrollTo(0, 0);
  }
// Menu hambuerguesa
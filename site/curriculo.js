function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src = "/imagens/icons8-menu-50.png";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src = "/imagens/close-menu.png";
  }
}

function mediaQuery() {
  if (window.innerWidth > 70) {
    menuMobile.classList.remove("open");
  } else (Smartphone = true); {
    
  }
}
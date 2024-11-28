function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const logo = document.querySelector(".dropdown-logo");
    menu.classList.toggle("open");
    logo.classList.toggle("open");
  }
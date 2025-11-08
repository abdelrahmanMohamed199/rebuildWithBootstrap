let header = document.querySelector("header");
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let navbarBrand = document.querySelector(".navbar-brand");
let navbarItems = document.querySelectorAll(".nav-link");



window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add("bg-light", "shadow");
    header.classList.remove("bg-transparent");
    navbarBrand.classList.add("text-dark");
    navbarBrand.classList.remove("text-white");
    navbarItems.forEach(item => {
      item.classList.add("text-dark");
      item.classList.remove("text-danger");
    });
  } else {
    header.classList.remove("bg-light", "shadow");
    header.classList.add("bg-transparent");
    navbarBrand.classList.add("text-white");
    navbarBrand.classList.remove("text-dark");
    navbarItems.forEach(item => {
      item.classList.add("text-danger");
      item.classList.remove("text-dark");
    });
  }
});


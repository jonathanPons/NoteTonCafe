// @ts-nocheck
const burger = document.getElementById("burger");
const menuNav = document.getElementById("mobile-menu");
const CloseNav = document.getElementById("CloseNav");

// Menu Burger
burger.addEventListener("click", () => {
  menuNav.classList.add("show");
});
CloseNav.addEventListener("click", () => {
  menuNav.classList.remove("show");
});

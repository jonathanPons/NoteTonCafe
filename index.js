// @ts-nocheck
const burger = document.getElementById("burger");
const menuNav = document.getElementById("mobile-menu");
const CloseNav = document.getElementById("CloseNav");

burger.addEventListener("click", () => {
  console.log("hola");

  menuNav.classList.add("show");
});
CloseNav.addEventListener("click", () => {
  menuNav.classList.remove("show");
});

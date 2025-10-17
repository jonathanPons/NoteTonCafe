// =========================================
// 📱 Gestion du menu mobile burger
// =========================================

// On récupère les éléments utiles du DOM
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobile-menu");
const closeNav = document.getElementById("CloseNav");

// Quand on clique sur le burger → on affiche le menu
// @ts-ignore
burger.addEventListener("click", () => {
  // @ts-ignore
  mobileMenu.classList.add("show");
});

// Quand on clique sur la croix → on referme le menu
// @ts-ignore
closeNav.addEventListener("click", () => {
  // @ts-ignore
  mobileMenu.classList.remove("show");
});

// Quand on clique sur un lien du menu → on referme aussi le menu
// @ts-ignore
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    // @ts-ignore
    mobileMenu.classList.remove("show");
  });
});

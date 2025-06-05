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
// Formulaire

// au click sur un bouton je veux que les boutons soit actifs
// creer la boite des boutons

const boutons = document.querySelectorAll(".choix-btn");
// creer la fonction pour les rendres actif au clic et désactiver les autres
boutons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("active")) {
      btn.classList.remove("active");
    } else {
      boutons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    }
  });
});
// Je veux que au clic si je clic sur coffe shop  autre ou  famille / amis il
// me propose de rentrer  le nom du café et add photos

const sectionExterieur = document.getElementById("info-exterieur");
let boutonActif = null;

boutons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const choixLieux = btn.dataset.lieu;
    if (
      choixLieux === "coffee-shop" ||
      choixLieux === "famille-Amis" ||
      choixLieux === "autre"
    ) {
      sectionExterieur.style.display = "block";
    } else {
      sectionExterieur.style.display = "none";
    }
  });
});
// Ajouter le lieu du café quand j'appuie sur la croix

const addCroix = document.getElementById("add-lieu-btn");
const LieuxSauvegardes = document.getElementById("lieux-sauvegardes");
const nomLieu = document.getElementById("nom-Lieu");

// creation de la function
function addNewplaces() {
  const newInput = nomLieu.value.trim();
  if (newInput != "") {
    // creer la div
    const lieuWraper = document.createElement("div");
    //Ajouter une class
    lieuWraper.classList.add("lieu-sauvegarde-wrapper");
    console.log("ok");

    //creer le p
    const nouveaulieuElement = document.createElement("p");
    nouveaulieuElement.classList.add("lieu-sauvegarde-text");

    // dire qu'il contient le nouveau lieu
    nouveaulieuElement.textContent = newInput;
    // Le placer en enfan de la div

    //creer la poubelle
    const trash = document.createElement("i");
    trash.classList.add("fas", "fa-trash-alt", "delete-lieu-btn");
    console.log("poubelle cree");
    trash.addEventListener("click", () => {
      lieuWraper.remove();
      console.log(`Lieu supprimé ${newInput}`);
    });
    lieuWraper.appendChild(nouveaulieuElement);
    lieuWraper.appendChild(trash);
    console.log("P et i assembler");

    LieuxSauvegardes.appendChild(lieuWraper);

    nomLieu.value = "";
  } else {
    alert("Veuillez entrer un nom de lieu avant d'ajouter.");
  }
}
addCroix.addEventListener("click", addNewplaces);
// Declenche l'ajout du lieu quand la touche entrée est presse
nomLieu.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addNewplaces();
  }
});

// SInon commencer l'etape 2 directement

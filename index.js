// @ts-nocheck
const burger = document.getElementById("burger");
const menuNav = document.getElementById("mobile-menu");
const CloseNav = document.getElementById("CloseNav");

//ETape 1
const boutons = document.querySelectorAll(".choix-btn");
const sectionExterieur = document.getElementById("info-exterieur");
const addCroix = document.getElementById("add-lieu-btn");
const LieuxSauvegardes = document.getElementById("lieux-sauvegardes");
const nomLieu = document.getElementById("nom-Lieu");
//Etape 2
const etape2 = document.getElementById("preparation-cafe");
const boutonPrepa = document.querySelectorAll(".choix-prepa");

// Menu Burger
burger.addEventListener("click", () => {
  menuNav.classList.add("show");
});
CloseNav.addEventListener("click", () => {
  menuNav.classList.remove("show");
});
// Formulaire
console.log(etape2);
//--------- ADRESSE CAFE / PHOTP -------------------//

// Je veux que au clic si je clic sur coffe shop  autre ou  famille / amis il
// me propose de rentrer  le nom du café et add photos

boutons.forEach((btn) => {
  const choixLieux = btn.dataset.lieu;
  btn.addEventListener("click", () => {
    boutons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    if (choixLieux === "maison") {
      etape2.classList.add("active");
      sectionExterieur.style.display = "none";
      console.log("Affichage de l'étape 2");
    } else if (
      choixLieux === "coffee-shop" ||
      choixLieux === "famille-Amis" ||
      choixLieux === "autre"
    ) {
      etape2.classList.remove("active");
      sectionExterieur.style.display = "block";
      console.log("Affichage de la section extérieure");
    } else {
      etape2.classList.remove("active");
      sectionExterieur.style.display = "none";
      console.log("Aucun choix spécifique");
    }
  });
});

// Ajouter le lieu du café quand j'appuie sur la croix

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

//Quand je clique sur suivant je veux que l'etape 2 Preparation du café
// apparaisse ou directement quand je cliaue chez moi.

const buttonFinish = document.getElementById("finish-step-one");

buttonFinish.addEventListener("click", () => {
  etape2.classList.toggle("active");
});

// SInon commencer l'etape 2 directement
boutonPrepa.forEach((unePrepa) => {
  unePrepa.addEventListener("click", () => {
    if (unePrepa.classList.contains("active")) {
      unePrepa.classList.remove("active");
    } else {
      boutonPrepa.forEach((c) => c.classList.remove("active"));

      unePrepa.classList.add("active");
    }
    console.log("une prepa");

    const choixPrepa = unePrepa.dataset.prepa;
  });
});

// Marque du café ONLGET MAISON
let lieuSelectionne = "";
const marqueduCafe = document.getElementById("marque-cafe");

//etapte1, enregistrer le lieu

boutons.forEach((choixBTN) => {
  choixBTN.addEventListener("click", () => {
    boutons.forEach((b) => b.classList.remove("active"));
    choixBTN.classList.add("active");
    lieuSelectionne = choixBTN.dataset.lieu;
    console.log(lieuSelectionne);
  });
});
// Étape 2 : afficher la section marque/photo SEULEMENT si lieu = "maison"
boutonPrepa.forEach((btn) => {
  btn.addEventListener("click", () => {
    boutonPrepa.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    if (lieuSelectionne === "maison") {
      marqueduCafe.style.display = "block";
    } else {
      marqueduCafe.style.display = "none";
    }
  });
});

// @ts-nocheck

// Etape 1

const boutons = document.querySelectorAll(".choix-btn");
const sectionExterieur = document.getElementById("info-exterieur");
const addCroix = document.getElementById("add-lieu-btn");
const LieuxSauvegardes = document.getElementById("lieux-sauvegardes");
const nomLieu = document.getElementById("nom-Lieu");

// FORMULAIRE

// ETAPE 1  - LE LIEU

// EVENT SUR LE CHEZ MOI
let lieuSelectionne = null;

boutons.forEach((choixLieu) => {
  choixLieu.addEventListener("click", () => {
    const estActif = choixLieu.classList.contains("active");
    boutons.forEach((b) => b.classList.remove("active"));

    if (estActif) {
      etape2.classList.remove("active");
      sectionExterieur.classList.remove("active");
      lieuSelectionne = null;
      return;
    }
    choixLieu.classList.add("active");
    lieuSelectionne = choixLieu.dataset.lieu;
    if (lieuSelectionne === "maison") {
      etape2.classList.add("active");
      choixLieu.classList.add("active");

      sectionExterieur.classList.remove("active");
      console.log("Le bouton selectionné est", lieuSelectionne);
    }
    // EVENT SUR COFFE SHOP FAMILLE OU AMIS AUTRE
    else if (
      lieuSelectionne === "coffee-shop" ||
      lieuSelectionne === "famille-Amis" ||
      lieuSelectionne === "autre"
    ) {
      sectionExterieur.classList.add("active");
      etape2.classList.remove("active");

      console.log("Le bouton selectionné est", lieuSelectionne);
    }
  });
});

// Ajouter le lieu du café quand j'appuie sur la croix

// creation de la function pour créer la DIV+p+poubelle
function addNewplaces() {
  const newInput = nomLieu.value.trim();
  if (newInput != "") {
    // creer la div
    const lieuWraper = document.createElement("div");
    //Ajouter une class
    lieuWraper.classList.add("lieu-sauvegarde-wrapper");

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
// apparaisse ou directement quand je clique chez moi.

const buttonFinish = document.getElementById("finish-step-one");

buttonFinish.addEventListener("click", () => {
  etape2.classList.toggle("active");
});

// ETAPE 2- PREPARATION DU CAFE//

//Etape 2
const etape2 = document.getElementById("preparation-cafe");

const marqueInput = document.getElementById("marqueCafeInput");
const marquesContainer = document.getElementById("marques-sauvegardees");

const addNomMarque = document.getElementById("nom-marque");

// Met le choix de la prepa en rouge
const boutonPrepa = document.querySelectorAll(".choix-prepa");
boutonPrepa.forEach((unePrepa) => {
  const choixdelaPrepa = unePrepa.classList.contains("active");
  unePrepa.addEventListener("click", () => {
    if (choixdelaPrepa) {
      unePrepa.classList.toggle("active");
    } else {
      boutonPrepa.forEach((c) => c.classList.remove("active"));

      unePrepa.classList.add("active");
    }

    const choixPrepa = unePrepa.dataset.prepa;
  });
});

// Marque du café

const marqueduCafe = document.getElementById("marque-cafe");

//  afficher la section marque/photo
boutonPrepa.forEach((ChoixPrepa) => {
  ChoixPrepa.addEventListener("click", () => {
    const boutonPrepaActif = ChoixPrepa.classList.contains("active");

    boutonPrepa.forEach((b) => b.classList.contains("active"));
    ChoixPrepa.classList.remove("active");
    const preparaUtilisée = ChoixPrepa.dataset.prepa;
    if (boutonPrepaActif) {
      marqueduCafe.classList.toggle("active");

      console.log("la prepa utilisée est : ", preparaUtilisée);
    } else {
      ChoixPrepa.classList.remove("active");
    }
    if (marqueduCafe.classList.contains("active")) {
      ChoixPrepa.classList.add("active");
    }
  });
});
// VALIDER LA MARQUE DU CAFE
// Creer l'input pour la la marque du produit
const marquecafe = document.getElementById("nom-marque");
const addBrand = document.getElementById("add-marque-btn");
const divDeLaMarque = document.getElementById("marques-sauvegardees");

addBrand.addEventListener("click", () => {
  const NewMarque = marquecafe.value.trim();
  if (NewMarque != "") {
    // Creation de la div //
    const nouvelleDiv = document.createElement("div");

    // Creation de la class pour le CSS
    nouvelleDiv.classList.add("lieu-sauvegarde-wrapper");

    // Creation du texte
    const nouveauParagraphe = document.createElement("p");

    // Creation de la class pour le CSS
    nouveauParagraphe.classList.add("lieu-sauvegarde-text");
    nouveauParagraphe.textContent = NewMarque;

    //Creation de la poubelle
    const trash = document.createElement("i");
    trash.classList.add("fas", "fa-trash-alt", "delete-lieu-btn");
    console.log("poubelle cree");

    //Evenement au clic sur la poubelle
    trash.addEventListener("click", () => {
      // efface la nouvelle DIV
      nouvelleDiv.remove();
      marquecafe.disabled = false;
      console.log(`Lieu supprimé ${NewMarque}`);
    });
    nouvelleDiv.appendChild(nouveauParagraphe);
    nouvelleDiv.appendChild(trash);
    divDeLaMarque.appendChild(nouvelleDiv);

    // Le clic revient à ""
    marquecafe.value = "";
    marquecafe.disabled = true;

    console.log(NewMarque);
  } else {
    alert("Veuillez rentrer une marque de café ");
  }
});
// Declenche l'ajout de la marque quand la touche entrée est presse
marquecafe.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addBrand.click();
  }
});

// ETAPE 3 DEGUSTAION //
// @ts-nocheck

const etape2Finish = document.getElementById("finish-step-two");
const degustationDiv = document.getElementById("degustation");
const avantBouche = document.getElementById("avant-bouche");

etape2Finish.addEventListener("click", () => {
  degustationDiv.classList.toggle("active");
});
// Je récupère l'input date
const dateInput = document.getElementById("date-degustation");
// Je récupère le bouton "suivant" de cette étape
const boutonsuivantDate = document.getElementById("afterDate");
boutonsuivantDate.addEventListener("click", () => {
  if (dateInput.value === "") {
    alert("Veuillez selectionner une date avant de continuer");
  } else {
    avantBouche.classList.toggle("active");
  }
});
// garde en rouge la famille d'odeur selectionnée

const familleOdeurAVantgout = document.querySelectorAll(".btn-arome");
console.log("Nombre de boutons trouvés :", boutons.length);

familleOdeurAVantgout.forEach((odeur) => {
  odeur.addEventListener("click", () => {
    if (odeur.classList.contains("active")) {
      odeur.classList.remove("active");
    } else {
      odeur.classList.add("active");
    }
  });
});

// Selection région du monde

const SelectionRegion = document.querySelectorAll(".regions");
let regionSelectionne = null;

SelectionRegion.forEach((Region) => {
  Region.addEventListener("click", () => {
    const RegionActive = Region.classList.contains("active");

    if (RegionActive) {
      Region.classList.remove("active");
    } else {
      SelectionRegion.forEach((b) => b.classList.remove("active"));
      Region.classList.add("active");
    }
    regionSelectionne = Region.dataset.regions;
    if (regionSelectionne === "Afrique de l'Est") {
      PaysAfricains.classList.toggle("active");
      DivAMCENtral.classList.remove("active");
      DivAMSud.classList.remove("active");
      DivAsie.classList.remove("active");
    }

    if (regionSelectionne === "Amérique Centrale") {
      DivAMCENtral.classList.toggle("active");
      PaysAfricains.classList.remove("active");
      DivAsie.classList.remove("active");
      DivAMSud.classList.remove("active");
    }
    if (regionSelectionne === "Amérique du Sud") {
      DivAMSud.classList.toggle("active");
      PaysAfricains.classList.remove("active");
      DivAMCENtral.classList.remove("active");
      DivAsie.classList.remove("active");
    }
    if (regionSelectionne === "Asie-Pacifique") {
      DivAsie.classList.toggle("active");
      PaysAfricains.classList.remove("active");
      DivAMCENtral.classList.remove("active");
      DivAMSud.classList.remove("active");
    }
  });
});

// Selection pays africains

const PaysAfricains = document.getElementById("pays-afrique");
const SelectionPays = document.querySelectorAll(".Pays-Afrique");

SelectionPays.forEach((PaysAF) => {
  PaysAF.addEventListener("click", () => {
    const PaysAFACtif = PaysAF.classList.contains("active");
    if (PaysAFACtif) {
      PaysAF.classList.remove("active");
      console.log("PaysAF desactive");
    } else {
      SelectionPays.forEach((b) => b.classList.remove("active"));
      PaysAF.classList.add("active");
      console.log("Pays Aff actif");
    }
  });
});
// Selection pays AM CEntral

const DivAMCENtral = document.getElementById("DIV-Pays-AM");
const ClassAMCentral = document.querySelectorAll(".Pays-Am-Centrale");
// Selection pays AM SUD
const DivAMSud = document.getElementById("DIV-Pays-AM-Sud");
const ClassAmSud = document.querySelectorAll(".Pays-Am-Sud");

// Selection pays Asie

const DivAsie = document.getElementById("DIV-Pays-Asie");
const ClassPaysAsie = document.querySelectorAll(".Pays-Asie");

/// FONCTION SELECTION PAYS ////

function selectionDuPays(LesPays) {
  LesPays.forEach((BTN) => {
    BTN.addEventListener("click", () => {
      const BTNActif = BTN.classList.contains("active");
      if (BTNActif) {
        BTN.classList.remove("active");
        console.log("btn desactivé");
      } else {
        LesPays.forEach((b) => b.classList.remove("active"));
        BTN.classList.add("active");
        console.log("btn actif");
      }

      // Ajouter "active" uniquement au bouton cliqué
    });
  });
}
selectionDuPays(ClassAMCentral);
selectionDuPays(ClassAmSud);
selectionDuPays(ClassPaysAsie);

// Pouvoir ouvrir qu'une liste de pays à la fois

const regionsDuMonde = {
  "Afrique de l'Est": document.getElementById("pays-afrique"),
  "Amérique Centrale": document.getElementById("DIV-Pays-AM"),
  "Amérique du Sud": document.getElementById("DIV-Pays-AM-Sud"),
  "Asie-Pacifique": document.getElementById("DIV-Pays-Asie"),
};
SelectionRegion.forEach((Region) => {
  Region.addEventListener("click", () => {
    SelectionRegion.forEach((b) => b.classList.remove("active"));
    Region.classList.add("active");
    console.log("oui region");

    const RegionChoisie = Region.dataset.regions;
    Object.value(regionsDuMonde).forEach((div) =>
      div.classList.remove("active")
    );

    const divCorrespondante = regionsDuMonde[RegionChoisie];
    if (divCorrespondante) {
      divCorrespondante.classList.add("active");
    }
  });
});

// CURSEUR NOTATION EN BOUCHE //

//ACIDITE
const cursorAcidite = document.getElementById("acidite");
const scoreAcidite = document.getElementById("score-acidite");

// AMERTUME

const cursorAmertume = document.getElementById("amertume");
const scoreAmertume = document.getElementById("score-amertume");

// PUISSANCE

const CursorPuissance = document.getElementById("puissance");
const scorePuissance = document.getElementById("score-puissance");

// DOUCEUR

const cursorDouceur = document.getElementById("Douceur");
const scoreDouceur = document.getElementById("score-douceur");

// Longeur en bouche

const cursorLongueur = document.getElementById("Longueur");
const scoreLongueur = document.getElementById("score-longueur");

function noteCurseur(curseur, affichage, nomCritere) {
  curseur.addEventListener("input", () => {
    const valeurChiffre = parseInt(curseur.value);
    affichage.textContent = `${nomCritere}:  ${curseur.value}/10 `;
    let couleur;
    if (valeurChiffre < 3) {
      couleur = "#00FF00";
    }
  });
  console.log(`${nomCritere} initialisé, valeur :`, curseur.value);
  const valeurChiffre = parseInt(curseur.value);
  console.log(valeurChiffre);
}
noteCurseur(cursorAcidite, scoreAcidite, "Acidité");
noteCurseur(cursorAmertume, scoreAmertume, "Amertume");
noteCurseur(CursorPuissance, scorePuissance, "Puissance");
noteCurseur(cursorDouceur, scoreDouceur, "Douceur");
noteCurseur(cursorLongueur, scoreLongueur, "Longueur");

// fonction couleur du curseur

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
    }

    if (regionSelectionne === "Amérique Centrale") {
      DivAMCENtral.classList.toggle("active");
    }
    if (regionSelectionne === "Amérique du Sud") {
      DivAMSud.classList.toggle("active");
    }
    if (regionSelectionne === "Asie-Pacifique") {
      DivAsie.classList.toggle("active");
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

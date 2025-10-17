// ===================================
// 📝 Déclaration globale de l'objet de données
// ===================================
const formulaireData = {
  lieu: null,
  prepa: null,
  marque: "",
  photoEtiquette: null,
  dateDegustation: null,
  regionGrain: null,
  paysChoisi: null,
  apparence: [],
  odeur: null,
  acidite: null,
  amertume: null,
  puissance: null,
  douceur: null,
  longueur: null,
  aromeBouche: [],
  noteGlobale: 0,
};

// ===================================
// 🚀 Gestion de l'affichage des étapes
// ===================================
const etape2Finish = document.getElementById("finish-step-two");
const degustationDiv = document.getElementById("degustation");
const avantBouche = document.getElementById("avant-bouche");

// @ts-ignore
etape2Finish.addEventListener("click", () => {
  // @ts-ignore
  degustationDiv.classList.add("active");
});

// ==============================
// 📅 Vérification de la date
// ==============================
const dateInput = document.getElementById("date-degustation");
const boutonSuivantDate = document.getElementById("afterDate");

// @ts-ignore
boutonSuivantDate.addEventListener("click", () => {
  // @ts-ignore
  if (dateInput.value === "") {
    alert("Veuillez sélectionner une date avant de continuer");
  } else {
    // @ts-ignore
    formulaireData.dateDegustation = dateInput.value;
    // @ts-ignore
    avantBouche.classList.add("active");
  }
});

// ===================================
// 👃 Gestion des arômes avant bouche
// ===================================
const familleOdeurAvantGout = document.querySelectorAll(".btn-arome");
console.log("Nombre de boutons trouvés :", familleOdeurAvantGout.length);

familleOdeurAvantGout.forEach((odeur) => {
  odeur.addEventListener("click", () => {
    odeur.classList.toggle("active");
    const valeur = odeur.textContent.trim();

    // @ts-ignore
    if (formulaireData.aromeBouche.includes(valeur)) {
      formulaireData.aromeBouche = formulaireData.aromeBouche.filter(
        (a) => a !== valeur
      );
    } else {
      // @ts-ignore
      formulaireData.aromeBouche.push(valeur);
    }
  });
});

// ===================================
// 🌍 Sélection Région / Pays
// ===================================
const SelectionRegion = document.querySelectorAll(".regions");

const regionsDuMonde = {
  "Afrique de l'Est": document.getElementById("pays-afrique"),
  "Amérique Centrale": document.getElementById("DIV-Pays-AM"),
  "Amérique du Sud": document.getElementById("DIV-Pays-AM-Sud"),
  "Asie-Pacifique": document.getElementById("DIV-Pays-Asie"),
};

SelectionRegion.forEach((regionBtn) => {
  regionBtn.addEventListener("click", () => {
    // Style actif unique
    SelectionRegion.forEach((b) => b.classList.remove("active"));
    regionBtn.classList.add("active");

    // Mise à jour des données
    // @ts-ignore
    const regionChoisie = regionBtn.dataset.regions;
    formulaireData.regionGrain = regionChoisie;

    // Afficher uniquement la div correspondant à la région choisie
    Object.values(regionsDuMonde).forEach((div) =>
      // @ts-ignore
      div.classList.remove("active")
    );
    const divRegion = regionsDuMonde[regionChoisie];
    if (divRegion) {
      divRegion.classList.add("active");
    }

    // Reset des pays
    resetAllCountry();
  });
});

// Fonction générique pour sélectionner un pays
function selectionDuPays(listeBoutons) {
  listeBoutons.forEach((btn) => {
    btn.addEventListener("click", () => {
      listeBoutons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      formulaireData.paysChoisi = btn.dataset.pays;
    });
  });
}

selectionDuPays(document.querySelectorAll(".Pays-Afrique"));
selectionDuPays(document.querySelectorAll(".Pays-Am-Centrale"));
selectionDuPays(document.querySelectorAll(".Pays-Am-Sud"));
selectionDuPays(document.querySelectorAll(".Pays-Asie"));

function resetAllCountry() {
  document
    .querySelectorAll(
      ".Pays-Afrique, .Pays-Am-Centrale, .Pays-Am-Sud, .Pays-Asie"
    )
    .forEach((b) => {
      b.classList.remove("active");
    });
  formulaireData.paysChoisi = null;
}

// ===================================
// 🍷 Curseurs de saveur
// ===================================
function noteCurseur(curseur, affichage, nomCritere) {
  curseur.addEventListener("input", () => {
    const valeurChiffre = parseInt(curseur.value);
    affichage.textContent = `${nomCritere} : ${valeurChiffre}/10`;
    formulaireData[nomCritere.toLowerCase()] = valeurChiffre;
  });
}

noteCurseur(
  document.getElementById("acidite"),
  document.getElementById("score-acidite"),
  "acidite"
);
noteCurseur(
  document.getElementById("amertume"),
  document.getElementById("score-amertume"),
  "amertume"
);
noteCurseur(
  document.getElementById("puissance"),
  document.getElementById("score-puissance"),
  "puissance"
);
noteCurseur(
  document.getElementById("Douceur"),
  document.getElementById("score-douceur"),
  "douceur"
);
noteCurseur(
  document.getElementById("Longueur"),
  document.getElementById("score-longueur"),
  "longueur"
);

// ===================================
// ⭐ Notation par étoiles
// ===================================
const Etoiles = document.querySelectorAll("[data-index]");

Etoiles.forEach((etoile) => {
  etoile.addEventListener("click", () => {
    // @ts-ignore
    const indexClique = parseInt(etoile.dataset.index);
    formulaireData.noteGlobale = indexClique;

    Etoiles.forEach((el) => {
      // @ts-ignore
      const i = parseInt(el.dataset.index);
      el.classList.toggle("fa-solid", i <= indexClique);
      el.classList.toggle("fa-regular", i > indexClique);
    });
  });
});

// ===================================
// 🧾 CheckBox & Radio boutons
// ===================================
const AspectAvantGout = document.querySelectorAll(`input[name="aspect"]`);
AspectAvantGout.forEach((b) => {
  b.addEventListener("change", () => {
    // @ts-ignore
    formulaireData.apparence = Array.from(AspectAvantGout)
      // @ts-ignore
      .filter((cb) => cb.checked)
      // @ts-ignore
      .map((cb) => cb.value);
  });
});

const OdeurAvantGout = document.querySelectorAll(`input[name="intensite"]`);
OdeurAvantGout.forEach((b) => {
  b.addEventListener("change", () => {
    const selectionRadio = document.querySelector(
      `input[name="intensite"]:checked`
    );
    // @ts-ignore
    formulaireData.odeur = selectionRadio.value;
  });
});

function validerFormulaire(data) {
  const erreurs = [];

  if (!data.lieu) erreurs.push("Le lieu est obligatoire");
  if (!data.prepa) erreurs.push("La préparation est obligatoire");

  return erreurs;
}

// ===================================
// 📨 Soumission du formulaire
// ===================================
const form = document.querySelector("#form-cafe");

// @ts-ignore
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const erreurs = validerFormulaire(formulaireData);
  if (erreurs.length > 0) {
    alert(
      "❌ Merci de compléter tous les champs obligatoires :\n- " +
        erreurs.join("\n- ")
    );
    return;
  }
  console.log("✅ Données complètes :", formulaireData);
  alert("Formulaire validé avec succès !");
});

// Sauvegarder les données dans localStorage
function sauvegarderFormulaire() {
  localStorage.setItem("formulaireCafe", JSON.stringify(formulaireData));
}

// Charger les données depuis localStorage
function chargerFormulaire() {
  const data = localStorage.getItem("formulaireCafe");
  if (data) {
    const parsed = JSON.parse(data);
    Object.assign(formulaireData, parsed);
    console.log("📥 Données rechargées depuis localStorage :", formulaireData);
  }
}
// Au chargement de la page
chargerFormulaire();

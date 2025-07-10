// ETAPE 3 DEGUSTAION //
// @ts-nocheck

const etape2Finish = document.getElementById("finish-step-two");
const degustationDiv = document.getElementById("degustation");
const avantBouche = document.getElementById("avant-bouche");

etape2Finish.addEventListener("click", () => {
  console.log("ok");

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
      console.log("Odeur désactivé " + odeur.textContent);
    } else {
      odeur.classList.add("active");
      console.log("Odeur activé " + odeur.textContent);
    }
  });
});

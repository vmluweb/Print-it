// Déclaration des variables
const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Sélection de la bannière
const divBanner = document.querySelector("#banner");

// Sélection des bullets points
const bulletPointDiv = document.querySelector(".dots");

// Suivi index
let indexImageActuelle = 0;

// Carrousel
function genererSlide(slides) {
  let slide = slides[indexImageActuelle];

  if (slide === undefined) {
    indexImageActuelle = 0;
    slide = slides[indexImageActuelle];
  }
  // Création de l'élément img
  const imageElement = document.createElement("img");
  imageElement.className = "banner-img";
  imageElement.src = "./assets/images/slideshow/" + slide.image;
  // Rattachement de l'image et son texte à l'élément bannière
  divBanner.appendChild(imageElement);

  // Création de l'élément p
  const textElement = document.createElement("p");
  textElement.innerHTML = slide.tagLine;
  divBanner.appendChild(textElement);

  // Suppression de l'élément "p" du slide précédent
  const previousTextElement = divBanner.querySelector("p");
  if (previousTextElement) {
    divBanner.removeChild(previousTextElement);
  }

  // Mise à jour du bullet point actif
  updateBulletPoint();
}

// Ajout des écouteurs d'événements
// flèche de droite
const nextArrow = document.querySelector("#next_arrow");
nextArrow.addEventListener("click", () => {
  indexImageActuelle++;
  // Correspondance entre l'index et la longueur du tableau
  if (indexImageActuelle >= slides.length) {
    indexImageActuelle = 0;
  }
  genererSlide(slides);
  // test pour vérifier le fonctionnement des flèches
  console.log(slides[indexImageActuelle]);
});

// flèche de gauche
const previousArrow = document.querySelector("#previous_arrow");
previousArrow.addEventListener("click", () => {
  indexImageActuelle--;
  if (indexImageActuelle < 0) {
    indexImageActuelle = slides.length - 1;
  }
  genererSlide(slides);
  console.log(slides[indexImageActuelle]);
});

// Tableau stockant les éléments dots
const bulletPointsArray = [];

function genererBulletPoints(slides) {
  // Création des éléments dots
  for (let i = 0; i < slides.length; i++) {
    const dots = document.createElement("div");
    dots.className = "dot";
    bulletPointDiv.appendChild(dots);
    // Ajout des éléments dots dans le tableau bulletPointsArray
    bulletPointsArray.push(dots);
  }
  updateBulletPoint();
}
genererBulletPoints(slides);

// Mise à jour du bullet point actif
function updateBulletPoint() {
  for (i = 0; i < bulletPointsArray.length; i++) {
    // Suppression de la classe "dot_selected"
    bulletPointsArray[i].classList.remove("dot_selected");
  }
  // Ajout de la classe "dot_selected" au bullet point actif
  bulletPointsArray[indexImageActuelle].classList.add("dot_selected");
  // Vérification de l'index du bullet point actif
  console.log("L'index du bullet point actif est: " + indexImageActuelle);
}

genererSlide(slides);

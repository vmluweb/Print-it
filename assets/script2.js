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

// Fonction génèrant un slide
function genererSlide(slide) {
  // Création de l'élément img
  const imageElement = document.createElement("img");
  imageElement.className = "banner-img";

  // Accès à l'indice i de la liste de slides pour configurer la source de l'image
  imageElement.src = "./assets/images/slideshow/" + slide.image;

  // Création d'une balise p
  const textElement = document.createElement("p");

  // Accès à l'indice i de la liste de slides pour afficher le texte de l'image
  textElement.innerHTML = slide.tagLine;

  // Rattachement de l'image et son texte à l'élément bannière
  divBanner.appendChild(imageElement);
  divBanner.appendChild(textElement);
}

// fonction générant le carrousel
function genererSlider(slides) {
  divBanner.innerHTML = "";
  for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];

    if (i === indexImageActuelle) {
      genererSlide(slide);
    }
  }
}

// Suivi index du slide actuel
let indexImageActuelle = 0;

// Affiche le premier slide
genererSlider(slides);

// Ajout du listener pour activer la flèche du slide suivant
const nextArrow = document.querySelector("#next_arrow");

nextArrow.addEventListener("click", () => {
  indexImageActuelle++;
  // Ajout d'une condition pour vérifier la correspondance entre l'index et la longueur du tableau
  if (indexImageActuelle >= slides.length) {
    indexImageActuelle = 0;
  }

  genererSlider(slides);
});

// ****************/!\ PARTIE FLECHES SCRIPT.JS/!\********************

// Ajout du listener pour activer la flèche du slide suivant
const nextArrow = document.querySelector("#next_arrow");

nextArrow.addEventListener("click", () => {
  indexImageActuelle++;
  // Ajout d'une condition pour vérifier la correspondance entre l'index et la longueur du tableau
  if (indexImageActuelle >= slides.length) {
    indexImageActuelle = 0;
  }

  genererSlide(slides);
});

// /!\ Ajout du listener pour activer la flèche du slide précédent /!\
const previousArrow = document.querySelector("#previous_arrow");

previousArrow.addEventListener("click", () => {
  indexImageActuelle--;
  // Ajout d'une condition pour vérifier la correspondance entre l'index et la longueur du tableau
  if (indexImageActuelle < 0) {
    indexImageActuelle = slides.length - 1;
  }
  genererSlide(slides);
});

// Sélection des bullets points
const bulletPointDiv = document.querySelector(".dots");

// Ajout d'une fonctionnalité permettant de repérer le slide actif
function genererBulletPoints(slides) {
  // Création des bullet points en fonction du nombre de slides
  for (i = 0; i < slides.length; i++) {
    const dots = document.createElement("div");
    dots.className = "dot";
    bulletPointDiv.appendChild(dots);

    // Ajout d'une condition pour modifier le style du bullet point actif en fonction du slide actuel
    if (i === indexImageActuelle) {
      dots.classList.add("dot_selected");
    }
  }
}

genererBulletPoints(slides);

// 2ème idée pour bullet points
// Ajout d'une fonctionnalité permettant de repérer le slide actif
function genererBulletPoints(slides) {
  // Création des bullet points en fonction du nombre de slides
  for (let i = 0; i < slides.length; i++) {
    const bulletPointDiv = document.createElement("div");
    bulletPointDiv.className = "dots";
    divBanner.appendChild(bulletPointDiv);

    const dots = document.createElement("div");
    dots.className = "dot";
    bulletPointDiv.appendChild(dots);

    // Ajout d'une condition pour modifier le style du bullet point actif en fonction du slide actuel
    if (i === indexImageActuelle) {
      dots.classList.add("dot_selected");
    }
  }
}
genererBulletPoints(slides);

// Création des flèches du carrousel
const next_arrow = document.createElement("img");
next_arrow.classList = "arrow arrow_right";
next_arrow.src = "./assets/images/arrow_right.png";
next_arrow.id = "next_arrow";
divBanner.appendChild(next_arrow);

const previous_arrow = document.createElement("img");
previous_arrow.classList = "arrow arrow_left";
previous_arrow.src = "./assets/images/arrow_left.png";
previous_arrow.id = "previous_arrow";
divBanner.appendChild(previous_arrow);

// Ajout d'une condition pour vérifier l'index de l'image actuel et désaffichage des autres images du carrousel + // Ajout d'une condition pour vérifier l'index de l'image actuel et désaffichage des autres images du carrousel
if (i !== indexImageActuelle) {
  imageElement.style.display = "none";
  textElement.style.display = "none";
}

// Création des flèches du carrousel
const next_arrow = document.createElement("img");
next_arrow.classList = "arrow arrow_right";
next_arrow.src = "./assets/images/arrow_right.png";
next_arrow.id = "next_arrow";
divBanner.appendChild(next_arrow);

const previous_arrow = document.createElement("img");
previous_arrow.classList = "arrow arrow_left";
previous_arrow.src = "./assets/images/arrow_left.png";
previous_arrow.id = "previous_arrow";
divBanner.appendChild(previous_arrow);

// Affiche le premier slide
// genererSlide(slides);

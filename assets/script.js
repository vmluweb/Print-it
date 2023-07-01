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
// Suivi index du slide actuel
let indexImageActuelle = 0;

// Fonction qui génère le carrousel
function genererSlide(slides) {
  let slide = slides[indexImageActuelle];
  // Création de l'élément img
  const imageElement = document.createElement("img");
  imageElement.className = "banner-img";

  // Accès à l'indice i de la liste de slides pour configurer la source de l'image
  imageElement.src = "./assets/images/slideshow/" + slide.image;

  // Rattachement de l'image et son texte à l'élément bannière
  divBanner.appendChild(imageElement);

  // Création d'une balise p
  const textElement = document.createElement("p");

  // Accès à l'indice i de la liste de slides pour afficher le texte de l'image
  textElement.innerHTML = slide.tagLine;

  // Rattachement de l'image et son texte à l'élément bannière
  divBanner.appendChild(textElement);

  // Suppression de l'élément "p" du slide précédent
  const previousSlide = slides[indexImageActuelle - 1];
  const previousTextElement = divBanner.querySelector("p");

  if (previousTextElement.innerHTML === previousSlide.tagLine) {
    divBanner.removeChild(previousTextElement);
  }

  // Mise à jour du bullet point actif
  updateBulletPoint();
}

// Ajout du listener pour activer la flèche du slide suivant
const nextArrow = document.querySelector("#next_arrow");

nextArrow.addEventListener("click", () => {
  indexImageActuelle++;

  // Ajout d'une condition pour vérifier la correspondance entre l'index et la longueur du tableau
  if (indexImageActuelle >= slides.length) {
    indexImageActuelle = 0;
  }

  genererSlide(slides);
  // test de l'écouteur de la flèche de droite pour vérifier le slide actuel
  console.log(slides[indexImageActuelle]);
});

// Ajout du listener pour activer la flèche du slide précédent
const previousArrow = document.querySelector("#previous_arrow");

previousArrow.addEventListener("click", () => {
  indexImageActuelle--;

  // Ajout d'une condition pour vérifier la correspondance entre l'index et la longueur du tableau
  if (indexImageActuelle < 0) {
    indexImageActuelle = slides.length - 1;
  }

  genererSlide(slides);

  // test de l'écouteur de la flèche de gauche pour vérifier le slide actuel
  console.log(slides[indexImageActuelle]);
});

// Tableau stockant les éléments dots
const bulletPointsArray = [];

// Fonctionnalité de mise à jour du bullet point actif
function updateBulletPoint() {
  for (i = 0; i < bulletPointsArray.length; i++) {
    // Suppression de la classe "dot_selected"
    bulletPointsArray[i].classList.remove("dot_selected");
  }

  // Ajout de la classe "dot_selected" au bullet point équivalant au slide actif
  bulletPointsArray[indexImageActuelle].classList.add("dot_selected");

  // Vérification de l'index du bullet point actif
  console.log("L'index du bullet point actif est: " + indexImageActuelle);
}

// Ajout d'une fonctionnalité permettant d'afficher le slide actif
function genererBulletPoints(slides) {
  for (let i = 0; i < slides.length; i++) {
    // Création des bullet points en fonction du nombre de slides
    const dots = document.createElement("div");
    dots.className = "dot";
    bulletPointDiv.appendChild(dots);

    // Ajout des éléments dots dans le tableau bulletPointsArray
    bulletPointsArray.push(dots);

    // Ajout d'une condition pour modifier le style du bullet point actif en fonction du slide actuel
    if (i === indexImageActuelle) {
      dots.classList.add("dot_selected");
    }
  }
}

genererBulletPoints(slides);

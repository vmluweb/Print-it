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
// Suivi index du slide actuel
let indexImageActuelle = 0;

// Fonction qui génère le carrousel
function genererSlide(slides) {
  const slide = slides[indexImageActuelle];
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

  const previousSlide = slides[indexImageActuelle - 1];
  const previousTextElement = divBanner.querySelector("p");

  if (previousTextElement.innerHTML === previousSlide.tagLine) {
    divBanner.removeChild(previousTextElement);
  }
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
});

// Ajout d'une fonctionnalité permettant de repérer le slide actif
function genererBulletPoints(slides) {
  // Sélection des bullets points
  const bulletPointDiv = document.createElement("div");
  bulletPointDiv.classList = "dots";
  divBanner.appendChild(bulletPointDiv);

  for (let i = 0; i < slides.length; i++) {
    // Création des bullet points en fonction du nombre de slides

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

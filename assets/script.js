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

// Fonction qui génère le carrousel
function genererSlide(slides) {
  for (let i = 0; i < slides.length; i++) {
    // Création de l'élément img
    const imageElement = document.createElement("img");
    imageElement.className = "banner-img";

    // Accès à l'indice i de la liste de slides pour configurer la source de l'image
    imageElement.src = "./assets/images/slideshow/" + slides[i].image;

    // Ajout d'une condition pour vérifier l'index de l'image actuel et désaffichage des autres images du carrousel
    if (i !== 0) {
      imageElement.style.display = "none";
    }

    // Rattachement de l'image et son texte à l'élément bannière
    divBanner.appendChild(imageElement);

    // Création d'une balise p
    const textElement = document.createElement("p");

    // Accès à l'indice i de la liste de slides pour afficher le texte de l'image
    textElement.innerHTML = slides[i].tagLine;

    // Ajout d'une condition pour vérifier l'index de l'image actuel et désaffichage des autres images du carrousel
    if (i !== 0) {
      textElement.style.display = "none";
    }

    // Rattachement de l'image et son texte à l'élément bannière
    divBanner.appendChild(textElement);
  }
}

genererSlide(slides);

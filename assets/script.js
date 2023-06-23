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

// Sélection des éléments
const divBanner = document.querySelector("#banner");

// Création et affichage des éléments
const imageElement = document.createElement("img");
imageElement.src = "./assets/images/slideshow/" + slides[0].image;
imageElement.className = "banner-img";

const textElement = document.createElement("p");
textElement.innerHTML = slides[0].tagLine;

divBanner.appendChild(imageElement);
divBanner.appendChild(textElement);

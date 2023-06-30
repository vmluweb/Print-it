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
  divBanner.innerHTML = "";
  for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    // Création de l'élément img
    const imageElement = document.createElement("img");
    imageElement.className = "banner-img";

    // Accès à l'indice i de la liste de slides pour configurer la source de l'image
    imageElement.src = "./assets/images/slideshow/" + slide.image;

    // Création d'une balise p
    const textElement = document.createElement("p");

    // Accès à l'indice i de la liste de slides pour afficher le texte de l'image
    textElement.innerHTML = slide.tagLine;

    if (i !== indexImageActuelle) {
      imageElement.style.display = "none";
      textElement.style.display = "none";
    }

    // Rattachement de l'image et son texte à l'élément bannière
    divBanner.appendChild(imageElement);
    divBanner.appendChild(textElement);
  }
}

// Suivi index du slide actuel
let indexImageActuelle = 0;

// Affiche le premier slide
genererSlide(slides);

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

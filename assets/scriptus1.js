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

const arrow_left = document.querySelector("#arrow_left");
const arrow_right = document.querySelector("#arrow_right");

const arrows = document.querySelector(".arrow");
const slide = slides[0];

// arrows.addEventListener('click',)

// function image_change() {
//   for (let i = 0; i <= slides.length; i++) {
//     alert("on change");
//   }
//   console.log("toutes les images se sont affichés !");
// }

// arrow_left.addEventListener("click", image_change);
// arrow_right.addEventListener("click", image_change);
function image_change() {
  for (let slide of slides) {
    for (let i = 0; i <= slides.length; i++) {}
    console.log(
      "L'image " + slide.image + " a pour description: " + slide.tagLine
    );
  }
}

arrow_left.addEventListener("click", image_change(-1));
arrow_right.addEventListener("click", image_change(1));

// if (arrow_right.onclick) {
// }
// if (arrow_left.onclick) {
// 	slides[0] = slide - 1;
//   } else {
// 	slides[0] = slide + 1;
//   }

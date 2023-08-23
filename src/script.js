//header scroll
const navbar = document.querySelector("header");

window.onscroll = () => {
  if (window.scrollY > 100) {
    navbar.classList.add("bg-color-primary-dark");
    navbar.classList.add("border-b");
    navbar.classList.add("border-color-gray");
  } else {
    navbar.classList.remove("bg-color-primary-dark");
    navbar.classList.remove("border-b");
    navbar.classList.remove("border-color-gray");
  }
};

// mobile menu
const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const hLink = document.querySelectorAll("#hLink");
const faSolid = document.querySelector(".fa-solid");

// adding an event listener
hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  faSolid.classList.toggle("fa-xmark");
});

// to remove the nav each time a nav is clicked
hLink.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    faSolid.classList.toggle("fa-xmark");
  });
});

//Testimonial
const userTexts = document.getElementsByClassName("user-text");
const userPics = document.getElementsByClassName("user-pic");

// After adding the onclick function to the target, i have to define the function
function showReview() {
  for (userPic of userPics) {
    userPic.classList.remove("active-pic");
  }
  for (userText of userTexts) {
    userText.classList.remove("active-text");
  }

  // an array for userPics to be the target
  let i = Array.from(userPics).indexOf(event.target);

  // adding the border of the particular image and text
  userPics[i].classList.add("active-pic");
  userTexts[i].classList.add("active-text");
}

// toggle btn for rotating the cards
const toggleBtn = document.getElementById("toggleBtn");

const card_1_front = document.querySelector("#card_1_front");
const card_1_back = document.querySelector("#card_1_back");

const card_2_front = document.querySelector("#card_2_front");
const card_2_back = document.querySelector("#card_2_back");

const card_3_front = document.querySelector("#card_3_front");
const card_3_back = document.querySelector("#card_3_back");

toggleBtn.addEventListener("change", () => {
  card_1_front.classList.toggle("-rotate-y-180");
  card_1_back.classList.toggle("rotate-y-180");

  card_2_front.classList.toggle("-rotate-y-180");
  card_2_back.classList.toggle("rotate-y-180");

  card_3_front.classList.toggle("-rotate-y-180");
  card_3_back.classList.toggle("rotate-y-180");
});

//

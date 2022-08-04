//==============DARK THEME===================
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

//PREVEIOSLY SELECTED TOPIC (checking from local storage)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

//we obtain the current theme that the interface has by validating the dark theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  document.body.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

//we need to validate if the user has previously chosen a topic
if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}
//activate the theme manually with the button
themeButton.addEventListener("click", () => {
  //add or remove the dark/light icon
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  //save the theme and the current icon that the user has chosen
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
console.log("theme setting is WORKING!");

//==============MENU SHOW Y HIDDEN===================
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

//==================Menu SHOW==========================
// vaild if the constant exists
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
//==================Menu HIDE==========================
// vaild if the constant exists
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
console.log("menu Y setting working!");
//==================REMOVE MENU PROFILE==========================
const navLink = document.querySelectorAll(".nav_link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  //when we click on nav_link,we remove the show menu
  navMenu.classList.remove("show-menu");
}
navLink.forEach(n => n.addEventListener("click", linkAction));
console.log("remove menu profile working!");

//==================TYPEWRITER EFFECT==========================

new Typewriter("#typewriter", {
  strings: ["zhe xu", "Romeo", "web-developer"],
  autoStart: true,
  loop: true,
  cursor: "|"
});
console.log("typewrite effect working");

//==================portfolio swiper==========================
var swiper = new Swiper(".blog-slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  mousewheel: {
    invert: false
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  pagination: {
    el: ".blog-slider__pagination",
    clickable: true
  },
  // mousewheel: true,
  keyboard: true
});

console.log("portfolio swiper working");

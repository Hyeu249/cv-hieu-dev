let menu = document.querySelector("#menu-btn");
let header = document.querySelector(".header");
const aNavbar = document.querySelectorAll(".navbar a");

for (let i = 0; i < aNavbar.length; i++) {
  aNavbar[i].addEventListener("click", () => {
    for (let i = 0; i < aNavbar.length; i++) {
      aNavbar[i].classList.remove("aChecked");
    }
    localStorage.setItem("clicked-a", i);
    aNavbar[i].classList.add("aChecked");
  });
}

const clickedA = localStorage.getItem("clicked-a");

if (clickedA === null) {
  aNavbar[0].click();
} else {
  aNavbar[clickedA].click();
}

menu.onclick = () => {
  menu.classList.toggle("bg-menu");
  header.classList.toggle("noneActive");
};

let themeToggler = document.querySelector("#theme-toggler");

themeToggler.onclick = () => {
  themeToggler.classList.toggle("fa-sun");
  if (themeToggler.classList.contains("fa-sun")) {
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }
};

window.addEventListener("resize", function () {
  if (window.innerWidth < 992) {
    menu.classList.add("bg-menu");
    header.classList.add("noneActive");
  }
});

const homeClass = document.querySelector(".home");
const aboutClass = document.querySelector(".about");
const projectsClass = document.querySelector(".projects");
const skillClass = document.querySelector(".skill");
const contactClass = document.querySelector(".contact");

const contentSections = [
  homeClass,
  aboutClass,
  skillClass,
  projectsClass,
  contactClass,
];

for (let i = 0; i < contentSections.length; i++) {
  contentSections[i].addEventListener("mouseover", () => {
    for (let i = 0; i < contentSections.length; i++) {
      aNavbar[i].classList.remove("aChecked");
    }
    localStorage.setItem("clicked-a", i);
    aNavbar[i].classList.add("aChecked");
  });
}

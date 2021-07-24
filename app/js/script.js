"use strict";

const header = document.querySelector(".header");
const btnHam = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");
const menu = document.querySelector(".header__menu");

btnHam.addEventListener("click", function () {
  console.log("hamburger");

  if (header.classList.contains("open")) {
    //close hamburger menu
    body.classList.remove("noscroll");
    header.classList.remove("open");
    overlay.classList.add("fade-out");
    overlay.classList.remove("fade-in");
    menu.classList.add("fade-out");
    menu.classList.remove("fade-in");
  } else {
    //open hamburger menu
    body.classList.add("noscroll");
    header.classList.add("open");
    overlay.classList.add("fade-in");
    overlay.classList.remove("fade-out");
    menu.classList.add("fade-in");
    menu.classList.remove("fade-out");
  }
});

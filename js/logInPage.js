// logInPage.js
// This module handles the login page functionality

import { set } from "mongoose";

// Exporting the function to initialize the menu button
export default function logInPage() {
  initMenuBtn();
}
var initMenuBtn = () => {
  var menuBtn = document.getElementsByClassName("rightBox")[0];
  var menuBox = document.getElementsByClassName("menuBox")[0];
  menuBtn.addEventListener("click", function (e) {
    console.log("you click the menu button");
    menuBox.classList.toggle("fade");
  });
};

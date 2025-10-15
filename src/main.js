import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
// import "./js/logInPage.js";
import logInPage from '../js/logInPage.js';
// logInPage();
function logInJump() {
    window.location.href = "pages/login.html";
}

function sayHello() {
    
}
// document.addEventListener('DOMContentLoaded', sayHello);
// .logIn
document.querySelector('.logIn').addEventListener('click', logInJump);

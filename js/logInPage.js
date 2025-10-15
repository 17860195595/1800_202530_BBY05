import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
console.log("logInPage.js is loaded");
// Handle form submissions
const loginForm = document.querySelector('#login form');
loginForm.addEventListener('submit', function(e) {
  e.preventDefault(); // 阻止表单默认提交
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  console.log('Email:', email);
  console.log('Password:', password);
});

const registerForm = document.querySelector('#register form');
registerForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;
  const confirm = document.getElementById('registerConfirm').value;
  console.log('Email:', email);
  console.log('Password:', password);
  console.log('Confirm:', confirm);
});
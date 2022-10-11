const password = document.getElementById("password");
const eyeIcon = document.getElementById("eye");
let strengthBar = document.getElementById("password-strength");
// let strengthBar = document.querySelector(".progress-bar");
let lowerUpperCase = document.querySelector(".low-upper-case");
let number = document.querySelector(".number");
let specialChar = document.querySelector(".special-char");
let leastChar = document.querySelector(".least-char");
let low = document.querySelector(".low");
let num = document.querySelector(".num");
let spe = document.querySelector(".spe");
let les = document.querySelector(".les");
// let state = false;

eyeIcon.addEventListener("click", () => {
  if (eyeIcon.classList.contains("fa-eye")) {
    password.setAttribute("type", "text");
    eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    password.setAttribute("type", "password");
    eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
  }
});

password.addEventListener("keyup", function () {
  let pass = password.value;

  checkStrength(pass);
});

function checkStrength(inputPassword) {
  let strength = 0;
  strengthBar.style.width = "0%";

  // check if password contain lowerCase or upperCase Character
  if (inputPassword.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
    strength += 1;

    low.classList.replace("fa-circle", "fa-check");
  } else {
    low.classList.replace("fa-check", "fa-circle");
  }

  // check if password has a number
  if (inputPassword.match(/([0-9])/)) {
    strength += 1;

    num.classList.replace("fa-circle", "fa-check");
  } else {
    num.classList.replace("fa-check", "fa-circle");
  }

  // check if password has a special character
  if (inputPassword.match(/([!@#$%^&*?~+_-])/)) {
    strength += 1;

    spe.classList.replace("fa-circle", "fa-check");
  } else {
    spe.classList.replace("fa-check", "fa-circle");
  }

  // check if password is up to 8 characters
  if (inputPassword.length >= 8) {
    strength += 1;

    les.classList.replace("fa-circle", "fa-check");
  } else {
    les.classList.replace("fa-check", "fa-circle");
  }

  // strength progress bar
  if (strength == 1) {
    strengthBar.classList.remove("pb-warning");
    strengthBar.classList.remove("pb-primary");
    strengthBar.classList.remove("pb-success");
    strengthBar.classList.add("pb-danger");
    strengthBar.style.width = "25%";
  } else if (strength == 2) {
    strengthBar.classList.remove("pb-danger");
    strengthBar.classList.remove("pb-primary");
    strengthBar.classList.remove("pb-success");
    strengthBar.classList.add("pb-warning");
    strengthBar.style.width = "50%";
  } else if (strength == 3) {
    strengthBar.classList.remove("pb-warning");
    strengthBar.classList.remove("pb-danger");
    strengthBar.classList.remove("pb-success");
    strengthBar.classList.add("pb-primary");
    strengthBar.style.width = "75%";
  } else if (strength == 4) {
    strengthBar.classList.remove("pb-primary");
    strengthBar.classList.remove("pb-warning");
    strengthBar.classList.remove("pb-danger");
    strengthBar.classList.add("pb-success");
    strengthBar.style.width = "100%";
  }
}


const capsMessage = document.querySelector("#caps-message");

window.addEventListener("keyup", (event) => {
  if (event.getModifierState("CapsLock")) {
    capsMessage.style.display = "flex";
  }else{
    capsMessage.style.display = "none";
  } 
});






const eye = document.querySelector(".feather-eye");
const eyeoff = document.querySelector(".feather-eye-off");
const passwordField = document.querySelector("input[type=password]");

eye.addEventListener("click", () => {
  eye.style.display = "none";
  eyeoff.style.display = "block";

  passwordField.type = "text";
});

eyeoff.addEventListener("click", () => {
  eyeoff.style.display = "none";
  eye.style.display = "block";

  passwordField.type = "password";
});



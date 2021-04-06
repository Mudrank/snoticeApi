
const capsMessage = document.querySelector("#caps-message");

window.addEventListener("keyup", (event) => {
  if (event.getModifierState("CapsLock")) {
    capsMessage.style.display = "flex";
  }else{
    capsMessage.style.display = "none";
  } 
});


// window.addEventListener('DOMContentLoaded', () => {

//   Usercookie = localStorage.getItem('AdminCookieSubmitted');

//   if(Usercookie){
//     alert("User found redirecting.......")
//     window.location.href = "/main/index.htmll" ;
//  }

// });


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


function nextPage() {
 if  (passwordField.value == "ABMGRFITT") {
  cookie  = Cookies.set('Did user enter', 'true');
  localStorage.setItem('AdminCookieSubmitted' , cookie)

   window.location.href = "/admin/main/index.html" 
 } 
  else wrongPassword();

}

let error_wrongCode = document.querySelector("#wrong-code")

function wrongPassword(){
  error_wrongCode.innerHTML = "Error please check the password again";
  error_wrongCode.style.display = "flex";
  error_wrongCode.svg = 'flex';
  setInterval(() => {
     error_wrongCode.style.display = "none";
  }, 3000);
}
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");
const wrapper = document.querySelector(".wrapper");
const loginTitle = document.querySelector(".title-login");
const registerTitle = document.querySelector(".title-register");


function loginFunction() {
  loginForm.style.left = "50%";
  loginForm.style.opacity = 1;
  loginForm.style.pointerEvents = "auto";

  registerForm.style.left = "150%";
  registerForm.style.opacity = 0;
  registerForm.style.pointerEvents = "none";

  wrapper.style.height = "500px";

  loginTitle.style.top = "50%";
  loginTitle.style.opacity = 1;

  registerTitle.style.top = "50px";
  registerTitle.style.opacity = 0;
}


function registerFunction() {
  loginForm.style.left = "-50%";
  loginForm.style.opacity = 0;
  loginForm.style.pointerEvents = "none";

  registerForm.style.left = "50%";
  registerForm.style.opacity = 1;
  registerForm.style.pointerEvents = "auto";

  wrapper.style.height = "580px";

  loginTitle.style.top = "-60px";
  loginTitle.style.opacity = 0;

  registerTitle.style.top = "50%";
  registerTitle.style.opacity = 1;
}


loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(
    "https://script.google.com/macros/s/AKfycbyAyj52DIo0o80UIAtr39StkeXTR4RDlK6n6LcTLUcbYPkjuaGOWEbhvkWS5d__eEB3/exec",
    {
      method: "POST",
      body: new FormData(loginForm),
    }
  )
    .then((response) => response.text())
    .then(alert("Login successful!\n"))
    .catch(() => alert("Error logging in."));
});


registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(
    "https://script.google.com/macros/s/AKfycbyAyj52DIo0o80UIAtr39StkeXTR4RDlK6n6LcTLUcbYPkjuaGOWEbhvkWS5d__eEB3/exec",
    {
      method: "POST",
      body: new FormData(registerForm),
    }
  )
    .then((response) => response.text())
    .then(alert("Register successful!\n"))
    .catch(() => alert("Error registering."));
});

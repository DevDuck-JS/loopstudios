const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open"); // add and remove "open" classname into btn element's class
  menu.classList.toggle("flex"); // remove and add "open" classname into menu element's class
  menu.classList.toggle("hidden"); // add and remove "open" classname into menu element's class
}

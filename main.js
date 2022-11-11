const iconMenu = document.querySelector(".bx-menu");
const menu = document.querySelector(".conteiner_menu_items");

let count = 0;

iconMenu.addEventListener("click", function () {
  menu.classList.toggle("menu_show");
})
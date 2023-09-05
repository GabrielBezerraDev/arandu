const iconMenu = document.querySelector(".icon-menu");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");

console.dir(menu);
iconMenu.addEventListener("click", () => {
    menu.classList.toggle("showMenu");
    body.classList.toggle("scrollOff");
})
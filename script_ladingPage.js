const iconMenu = document.querySelector(".icon-menu");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");

function defineImg(){
    const images = document.querySelectorAll(".profileImg");
    for(let image of images){
        image.style.height = image.clientWidth;
    }
}
defineImg();

console.dir(menu);
iconMenu.addEventListener("click", () => {
    menu.classList.toggle("showMenu");
    body.classList.toggle("scrollOff");
})
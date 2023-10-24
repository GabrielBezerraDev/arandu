const selectRelatorio = document.getElementById("select");
const mainContent = document.querySelector(".main-content");
const loadingScreen = document.querySelector(".loading-screen");
const legend = document.querySelector(".legend");
let cout = 0;
let animation = true;


select.addEventListener("change", ({target}) => {
    const value = target.selectedOptions[0].classList[0];
    let currentTexto = document.querySelector(".actived");
    currentTexto.classList.remove("actived");
    let texto = document.getElementById(`${value}`);
    texto.classList.add("actived");
});

function animationLoad(){
    if(!animation) return
    setTimeout(() => {
        if(cout < 3){
            legend.innerHTML = `${legend.innerHTML += "."}`;
            console.log(legend.innerHTML);
            cout++;
        }else{
            legend.innerHTML = `${legend.innerHTML.slice(0,legend.innerHTML.length-3)}`
            cout = 0;
        }
        animationLoad();
    }, 800);
}
animationLoad();

function setSelectValue(){
    selectRelatorio.selectedIndex = 0;
}
setSelectValue();

function redirect(url){
    window.open(url, '_blank');
}

const oberserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("showAnimation");
            entry.target.classList.remove(".hidden");
        }
    });
});

const hiddensElements = document.querySelectorAll(".hidden");
hiddensElements.forEach(el => oberserver.observe(el));

function scrollSection(section){
    window.location = `#${section}`
    let myOffcanvas = document.getElementById('offcanvasExample');
    let bsOffcanvas = bootstrap.Offcanvas.getInstance(myOffcanvas)
    bsOffcanvas.hide();
}

window.addEventListener(("load"), () => {
    loadingScreen.style.display = "none";
    mainContent.style.display = "block";
    animation = false;
});









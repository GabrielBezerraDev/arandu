const select = document.getElementById("select");

function setSelectValue(){
    select.selectedIndex = 0;
}
setSelectValue();

function redirect(url){
    window.open(url, '_blank');
}

select.addEventListener("change", ({target}) => {
    const value = target.selectedOptions[0].classList[0];
    let currentTexto = document.querySelector(".actived");
    currentTexto.classList.remove("actived");
    let texto = document.getElementById(`${value}`);
    texto.classList.add("actived");
});


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


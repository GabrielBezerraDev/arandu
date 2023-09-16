const selectRelatorio = document.getElementById("select");

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









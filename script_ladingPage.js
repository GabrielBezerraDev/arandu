function redirect(url){
    console.log(url);
    window.open(url, '_blank');
}


const oberserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
            entry.target.classList.remove(".hidden");
            console.log(entry.target);
        }
    });
});

const hiddensElements = document.querySelectorAll(".hidden");
hiddensElements.forEach(el => oberserver.observe(el));
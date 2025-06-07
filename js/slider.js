var  slideMod = 0;

showSlides();
setInterval(showSlides, 4000);

function showSlides() {
    var slides = document.getElementsByClassName('slide');

    for(var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
       }
    
       slides[slideMod].style.display = "block";
       slideMod++;
    
       if (slideMod >= slides.length) {
        slideMod =0;
       }
}
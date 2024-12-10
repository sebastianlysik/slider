const slides = document.querySelectorAll(".slider img");
let slideIndex = 0;
const dots = document.querySelectorAll(".dots");

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    slides[slideIndex].classList.add("displaySlide");
    let intervalId = setInterval(nextSlide, 5000);
}
function ShowSlide(index){
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[index].classList.add("displaySlide");
    dots.forEach(dot => {
        dot.classList.remove("presentSlideDot")
    });
    dots[index].classList.add("presentSlideDot");

}
function nextSlide(){
    if(slideIndex >= slides.length-1){
        slideIndex = -1; 
    }
    slideIndex++;
    ShowSlide(slideIndex);
}
function prevSlide(){
    if(slideIndex <= 0){
        slideIndex = slides.length;
    }
    slideIndex--;
    ShowSlide(slideIndex);
    clearInterval(intervalId);
}
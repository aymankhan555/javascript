const slides = document.querySelectorAll('.slides img');
let slideIndex = 0;
let timeoutId = null;
document.addEventListener('DOMContentLoaded', initilize);
function initilize() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add('displaySlide');
        timeoutId = setInterval(nextSlide, 3000);
    }


}

function showSlide(index) {
    if (index < 0) {
        slideIndex = slides.length - 1;
    }
    else if (index >= slides.length) {
        slideIndex = 0;
    }
    slides.forEach(slide => {
        slide.classList.remove('displaySlide');
    });
    slides[slideIndex].classList.add('displaySlide');
}

function prevSlide() {
    clearTimeout(timeoutId);
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}
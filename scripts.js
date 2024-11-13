// JavaScript for image slideshow
let currentSlide = 0;
const slides = document.querySelectorAll('.artwork img');

function showSlide(index) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[index].style.display = 'block';
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Change image every 3 seconds

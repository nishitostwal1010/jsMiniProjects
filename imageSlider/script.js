const images = document.querySelectorAll(".image");
let startIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", startSlider);

function startSlider() {
    if(images.length > 0) {
        images[startIndex].classList.add("displayImg");
        intervalId = setInterval(nextSlide, 3000);
    }
}

function prevSlide() {

    clearInterval(intervalId);

    images[startIndex].classList.remove("displayImg");

    if(startIndex === 0) startIndex = images.length-1;
    else startIndex--;
    
    images[startIndex].classList.add("displayImg");

    intervalId = setInterval(nextSlide, 3000);
}

function nextSlide() {

    clearInterval(intervalId);

    images[startIndex].classList.remove("displayImg");
    startIndex = (startIndex+1) % images.length;
    images[startIndex].classList.add("displayImg");

    intervalId = setInterval(nextSlide, 3000);
}
const primary = "#3D3F82";
const secondary = "#D5202E";

// category in navbar
const searchdiv = document.getElementById("searchdiv");
const searchinput = document.getElementById("searchinput");
const searchbtn = document.getElementById("searchbtn");
const searchcategory = document.getElementById("searchcategory");

searchdiv.addEventListener("mouseenter", function() {
    searchbtn.style.backgroundColor = secondary;
    searchdiv.style.borderColor = secondary;
});

searchdiv.addEventListener("mouseleave", function() {
    if (searchinput === document.activeElement || searchcategory === document.activeElement) {
        return;
    }
    searchbtn.style.backgroundColor = primary;
    searchdiv.style.borderColor = primary;
});

searchinput.addEventListener("blur", function() {
    setTimeout(() => {
        if (searchcategory === document.activeElement) return;
        searchbtn.style.backgroundColor = primary;
        searchdiv.style.borderColor = primary;
    }, 0);
});

searchcategory.addEventListener("blur", function() {
    setTimeout(() => {
        if (searchinput === document.activeElement) return;
        searchbtn.style.backgroundColor = primary;
        searchdiv.style.borderColor = primary;
    }, 0);
});
// category in navbar end


// carousel js start
document.addEventListener("DOMContentLoaded", () => {
    const carouseldiv = document.getElementById("carouseldiv");
    const slides = document.getElementsByClassName("slide");
    const slideCount = slides.length;
    let currentSlideIndex = 0;
  
    // Hide all slides except the first one on initialization
    for (let i = 1; i < slideCount; i++) {
      slides[i].classList.remove("active");
    }
    slides[0].classList.add("active");
  
    function showSlide(index) {
      slides[index].classList.add("active");
    }
  
    function hideSlide(index) {
      slides[index].classList.remove("active");
    }
  
    function nextSlide() {
      const currentSlide = currentSlideIndex;
      currentSlideIndex = (currentSlideIndex + 1) % slideCount;
  
      // Show the next slide and hide the current slide
      showSlide(currentSlideIndex);
      setTimeout(() => {
        hideSlide(currentSlide);
      }, 400); // Adjust this timeout to balance the overlap
    }
  
    // Event listener for manual slide change
    carouseldiv.addEventListener("click", nextSlide);
  
    // Optionally, automatically change slides every 5 seconds
    setInterval(nextSlide, 5000);
  
    // Show the first slide initially
    showSlide(currentSlideIndex);
  });
  
// carousel js end


// count-down timer
let dest = new Date("may 31, 2024 10:00:00").getTime();
let x = setInterval(function () {
let now = new Date().getTime();
let diff = dest - now;

// Check if the countdown has reached zero or negative
if (diff <= 0) {
  clearInterval(x); // Stop the countdown
  return; // Exit the function
}

let days = Math.floor(diff / (1000 * 60 * 60 * 24));
let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((diff % (1000 * 60)) / 1000);

if (days < 10) {
days = `0${days}`;
}
if (hours < 10) {
hours = `0${hours}`;
}
if (minutes < 10) {
minutes = `0${minutes}`;
}
if (seconds < 10) {
seconds = `0${seconds}`;
}

// Get elements by class name
let countdownElements = document.getElementsByClassName("countdown-element");

// Loop through the elements and update their content
for (let i = 0; i < countdownElements.length; i++) {
let className = countdownElements[i].classList[1]; // Get the second class name
switch (className) {
  case "days":
    countdownElements[i].innerHTML = days;
    break;
  case "hours":
    countdownElements[i].innerHTML = hours;
    break;
  case "minutes":
    countdownElements[i].innerHTML = minutes;
    break;
  case "seconds":
    countdownElements[i].innerHTML = seconds;
    break;
  default:
    break;
}
}
}, 1000);

// count-down timer end





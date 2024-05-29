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




// carousel js end




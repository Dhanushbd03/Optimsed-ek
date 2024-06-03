const primary = "#3D3F82";
const secondary = "#D5202E";

// category in navbar
const searchdiv = document.getElementById("searchdiv");
const searchinput = document.getElementById("searchinput");
const searchbtn = document.getElementById("searchbtn");

searchdiv.addEventListener("mouseenter", function () {
  searchbtn.style.backgroundColor = secondary;
  searchdiv.style.borderColor = secondary;
});

searchdiv.addEventListener("mouseleave", function () {
  if (
    searchinput === document.activeElement ||
    selectbtn === document.activeElement
  ) {
    return;
  }
  searchbtn.style.backgroundColor = primary;
  searchdiv.style.borderColor = primary;
});
document.addEventListener("click", function () {
  if (searchinput === document.activeElement ) return;
  searchbtn.style.backgroundColor = primary;
  searchdiv.style.borderColor = primary;
});

searchinput.addEventListener("blur", function () {
  setTimeout(() => {
    
    searchbtn.style.backgroundColor = primary;
    searchdiv.style.borderColor = primary;
  }, 0);
});

// select dropdown 
document.addEventListener('DOMContentLoaded', function() {
  const select = document.getElementById('select');
  const selectbtn = document.getElementById('selectbtn');
  const selectMenu = document.getElementById('selectMenu');
  const selected = document.getElementById('selected');

  selectbtn.addEventListener('click', function() {
    selectMenu.classList.toggle('ek-hidden');
    
  });

  selectMenu.addEventListener('click', function(event) {
      if (event.target.tagName === 'LI') {
          const option = event.target.getAttribute('data-language');
          selected.textContent = option;
          selectMenu.classList.add('ek-hidden');
          
      }
  });

  document.addEventListener('click', function(event) {
      if (!select.contains(event.target)) {
        selectMenu.classList.add('ek-hidden');
        
      }
  });
});


// select dropdown end
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
let dest = new Date("june 31, 2024 10:00:00").getTime();
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

// products section

// Get elements by their IDs
const clickfeatured = document.getElementById("clickfeatured");
const clickonsale = document.getElementById("clickonsale");
const clicktoprated = document.getElementById("clicktoprated");
const featured = document.getElementById("featured");
const onsale = document.getElementById("onsale");
const toprated = document.getElementById("toprated");

// Initial styling for "Featured" tab and section
clickfeatured.style.borderColor = primary;
clickfeatured.style.borderBottom = "2px solid";
onsale.style.display = "none";
toprated.style.display = "none";

// Function to handle tab switching
function switchTab(
  activeTab,
  tab1,
  tab2,
  sectionToShow,
  sectionToHide1,
  sectionToHide2,
) {
  activeTab.style.borderColor = primary;
  activeTab.style.borderBottom = "2px solid";
  tab1.style.borderColor = "";
  tab1.style.borderBottom = "";
  tab2.style.borderColor = "";
  tab2.style.borderBottom = "";
  sectionToShow.style.display = "flex";
  sectionToHide1.style.display = "none";
  sectionToHide2.style.display = "none";
}

// Add event listeners for tab clicks
clickfeatured.addEventListener("click", () =>
  switchTab(
    clickfeatured,
    clickonsale,
    clicktoprated,
    featured,
    onsale,
    toprated,
  ),
);
clickonsale.addEventListener("click", () =>
  switchTab(
    clickonsale,
    clickfeatured,
    clicktoprated,
    onsale,
    featured,
    toprated,
  ),
);
clicktoprated.addEventListener("click", () =>
  switchTab(
    clicktoprated,
    clickfeatured,
    clickonsale,
    toprated,
    featured,
    onsale,
  ),
);

// products section end

// Footer dropdown
document.querySelectorAll(".toggler").forEach((button) => {
  button.addEventListener("click", () => {
    const dropdown = button.nextElementSibling;
    dropdown.classList.toggle("ek-hidden");
    dropdown.classList.toggle("ek-flex");
  });
});
// Footer dropdown end

// category dropdown

const categorybtn = document.getElementById("categorybtn");
const categorydropdown = document.getElementById("categorydropdown");

categorybtn.addEventListener("click", function () {
  if (categorydropdown.classList.contains("show")) {
    categorydropdown.classList.remove("show");
  } else {
    categorydropdown.classList.add("show");
  }
});


// category dropdown- end
// sidebar 

document.addEventListener("DOMContentLoaded", function () {
  // Function to toggle visibility and body scroll
  function toggleVisibility(element, className) {
    element.classList.toggle(className);
  }

  // Toggle sidebar visibility
  const sidebarButton = document.getElementById("sidebarbutton");
  const sidebarDiv = document.getElementById("sidebardiv");
  const sidebarclosebutton = document.getElementById("sidebarclosebutton")
  sidebarButton.addEventListener("click", function () {
    toggleVisibility(sidebarDiv, "showsidebar");
    document.body.classList.toggle("no-scroll", sidebarDiv.classList.contains("showsidebar"));
  });
  sidebarclosebutton.addEventListener("click",function(){
    toggleVisibility(sidebarDiv, "showsidebar");
    document.body.classList.toggle("no-scroll");
  })
  

  // Toggle main sidebar options
  document.querySelectorAll(".sidebar-option").forEach(function (option) {
    option.addEventListener("click", function () {
      const sidebar = option.querySelector(".sidebar");
      const fas = option.querySelector(".fas")
      fas.classList.toggle("ek-rotate-180")
      toggleVisibility(sidebar, "ek-hidden");
      

      // Check if any dropdown is open
      const anyDropdownOpen = Array.from(document.querySelectorAll(".sidebar-option .sidebar"))
        .some(sidebar => !sidebar.classList.contains("ek-hidden"));
      
    });
  });

  // Toggle second-level sidebar options
  document.querySelectorAll(".sidebar2").forEach(function (option) {
    option.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent event bubbling
      const sidebar3 = option.querySelector(".sidebar3");
      const fas = option.querySelector(".fas")
      fas.classList.toggle("ek-rotate-180")
      toggleVisibility(sidebar3, "ek-hidden");
      
    });
  });
});





// sidebar end
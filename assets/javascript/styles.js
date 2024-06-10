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
  if (searchinput === document.activeElement) return;
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
document.addEventListener("DOMContentLoaded", function () {
  const select = document.getElementById("select");
  const selectbtn = document.getElementById("selectbtn");
  const selectMenu = document.getElementById("selectMenu");
  const selected = document.getElementById("selected");

  selectbtn.addEventListener("click", function () {
    selectMenu.classList.toggle("ek-hidden");
  });

  selectMenu.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      const option = event.target.getAttribute("data-language");
      selected.textContent = option;
      selectMenu.classList.add("ek-hidden");
    }
  });

  document.addEventListener("click", function (event) {
    if (!select.contains(event.target)) {
      selectMenu.classList.add("ek-hidden");
    }
  });
});

// select dropdown end
// category in navbar end
// category dropdown

const categorybtn = document.getElementById("categorybtn");
const categorydropdown = document.getElementById("categorydropdown");
const categoriesList = document.getElementById("categoriesList");
if (categorybtn) {
  categorybtn.addEventListener("click", function () {
    if (categorydropdown.classList.contains("show")) {
      categorydropdown.classList.remove("show");
    } else {
      categorydropdown.classList.add("show");
    }
  });
  categorydropdown.classList.add("ek-overflow-y-hidden");
  categorydropdown.addEventListener("mouseenter", function () {
    categorydropdown.classList.add("scrollbar");
    categorydropdown.classList.add("ek-overflow-y-scroll");
  });
  categorydropdown.addEventListener("mouseleave", function () {
    categorydropdown.classList.remove("ek-overflow-y-scroll");
  });
  // submenu
  const categoriesListArray = Array.from(categoriesList.children);

  categoriesListArray.forEach((category) => {
    category.addEventListener("mouseenter", function (event) {
      const categoryListIndex = categoriesListArray.indexOf(
        event.currentTarget,
      );
      const id = "submenu-" + categoryListIndex;
      const submenu = document.getElementById(id);

      if (submenu) {
        submenu.parentElement.style.display = "block";
        submenu.style.display = "block";
      }
    });

    category.addEventListener("mouseleave", function (event) {
      const categoryListIndex = categoriesListArray.indexOf(
        event.currentTarget,
      );
      const id = "submenu-" + categoryListIndex;
      const submenu = document.getElementById(id);
      let isMouseOverSubmenu = false;
      if (submenu) {
        submenu.addEventListener("mouseenter", function () {
          isMouseOverSubmenu = true;
        });

        submenu.addEventListener("mouseleave", function () {
          isMouseOverSubmenu = false;
          submenu.style.display = "none";
          submenu.parentElement.style.display = "none";
        });
        setTimeout(() => {
          if (!isMouseOverSubmenu) {
            submenu.parentElement.style.display = "none";
            submenu.style.display = "none";
          }
        }, 100);
      }
    });
  });
}
// category dropdown- end

// carousel js start
let slider = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .item");
let dots = document.querySelectorAll(".slider .dots li");
if (slider) {
  let lengthItems = items.length;
  let active = 1; // Start at 1 to accommodate the prepended clone
  let isTransitioning = false;

  // Clone first and last items
  let firstClone = items[0].cloneNode(true);
  let lastClone = items[lengthItems - 1].cloneNode(true);

  slider.appendChild(firstClone);
  slider.insertBefore(lastClone, items[0]);

  items = document.querySelectorAll(".slider .list .item"); // Update items to include clones

  function updateSliderPosition() {
    slider.style.left = -items[active].offsetLeft + "px";
  }

  function reloadSlider() {
    slider.style.transition = "left 2s";
    updateSliderPosition();

    let lastActiveDot = document.querySelector(".slider .dots li.active");
    if (lastActiveDot) lastActiveDot.classList.remove("active");
    dots[(active - 1 + lengthItems) % lengthItems].classList.add("active"); // Adjust active dot

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
      if (isTransitioning) return;
      isTransitioning = true;
      active++;
      reloadSlider();
    }, 3000);

    setTimeout(() => {
      if (active === lengthItems + 1) {
        slider.style.transition = "none";
        active = 1;
        updateSliderPosition();
      }
      isTransitioning = false;
    }, 2000);
  }
  dots.forEach((li, key) => {
    li.addEventListener("click", () => {
      if (isTransitioning) return;
      active = key + 1; // Adjust for the cloned items
      reloadSlider();
    });
  });

  let refreshInterval = setInterval(() => {
    if (isTransitioning) return;
    isTransitioning = true;
    active++;
    reloadSlider();
  }, 3000);

  window.onresize = function () {
    updateSliderPosition();
  };

  // Initial positioning to account for the prepended clone
  updateSliderPosition();
}

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

if (clickfeatured) {
  clickfeatured.style.borderBottom = "2px solid #3D3F82";
  clickfeatured.classList.add("show-after");
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
    activeTab.style.borderBottom = "2px solid #3D3F82";
    activeTab.classList.add("show-after");
    tab1.classList.remove("show-after");
    tab2.classList.remove("show-after");
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
}

// progress bar of special offer

// for example
const available = 6;
const totalproducts = 34;
const percentage = (6 / 34) * 100;
const progressbar = document.getElementById("progressbar");
if (progressbar) {
  document.addEventListener("DOMContentLoaded", function () {
    progressbar.style.width = percentage + "%";
  });
}
// progress bar of special offer end

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

// sidebar

document.addEventListener("DOMContentLoaded", function () {
  // Function to toggle visibility and body scroll
  function toggleVisibility(element, className) {
    element.classList.toggle(className);
  }

  // Toggle sidebar visibility
  const sidebarButton = document.getElementById("sidebarbutton");
  const sidebarDiv = document.getElementById("sidebardiv");
  const sidebarclosebutton = document.getElementById("sidebarclosebutton");
  sidebarButton.addEventListener("click", function () {
    toggleVisibility(sidebarDiv, "showsidebar");
    document.body.classList.toggle(
      "no-scroll",
      sidebarDiv.classList.contains("showsidebar"),
    );
  });
  sidebarclosebutton.addEventListener("click", function () {
    toggleVisibility(sidebarDiv, "showsidebar");
    document.body.classList.toggle("no-scroll");
  });

  // Toggle main sidebar options
  document.querySelectorAll(".sidebar-option").forEach(function (option) {
    option.addEventListener("click", function () {
      const sidebar = option.querySelector(".sidebar");
      const fas = option.querySelector(".fas");
      fas.classList.toggle("ek-rotate-180");
      toggleVisibility(sidebar, "ek-hidden");

      // Check if any dropdown is open
      const anyDropdownOpen = Array.from(
        document.querySelectorAll(".sidebar-option .sidebar"),
      ).some((sidebar) => !sidebar.classList.contains("ek-hidden"));
    });
  });

  // Toggle second-level sidebar options
  document.querySelectorAll(".sidebar2").forEach(function (option) {
    option.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent event bubbling
      const sidebar3 = option.querySelector(".sidebar3");
      const fas = option.querySelector(".fas");
      fas.classList.toggle("ek-rotate-180");
      toggleVisibility(sidebar3, "ek-hidden");
    });
  });
});
// sidebar end

// Product Page

// preview product image slide
const previewproductimage = document.getElementById("previewproductimage");
const optionimage = document.getElementById("optionimage");
if (optionimage) {
  optionimage.addEventListener("click", function (event) {
    if (event.target.tagName === "IMG") {
      const src = event.target.getAttribute("src");
      previewproductimage.setAttribute("src", src);
    }
  });
}

// preview product image slide end

// quantity counter
const counter = document.getElementById("counter");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");

if (counter) {
  increaseButton.addEventListener("click", () => {
    counter.textContent = parseInt(counter.textContent) + 1;
  });

  decreaseButton.addEventListener("click", () => {
    if (parseInt(counter.textContent) <= 0) {
      return;
    }
    counter.textContent = parseInt(counter.textContent) - 1;
  });
}
// quantity counter end
// Product details
const productDetails = document.getElementById("product-details");
const productBriefDetails = document.getElementById("product-brief-details");

if (productDetails) {
  const productsDetailsChildren = Array.from(productDetails.children);
  const productBriefDetailsChildren = Array.from(productBriefDetails.children);
  productDetails.querySelector("li").style.borderBottom =
    "3px solid " + primary;

  productBriefDetailsChildren[0].style.display = "flex";
  productDetails.addEventListener("click", function (event) {
    productDetails.querySelectorAll("li").forEach((li) => {
      if (li == event.target) {
        li.style.borderBottom = "3px solid " + primary;
      } else {
        if (event.target.tagName !== "LI") {
          return;
        }
        li.style.borderBottom = "none";
      }
    });
    const productsDetailsindex = productsDetailsChildren.indexOf(event.target);
    productBriefDetailsChildren.forEach((child, index) => {
      if (index == productsDetailsindex) {
        child.style.display = "flex";
      } else {
        if (productsDetailsindex === -1) {
          return;
        }

        child.style.display = "none";
      }
    });
  });
}

// login & register

const loginemaildiv = document.getElementById("login-emaildiv");
const loginpassworddiv = document.getElementById("login-passworddiv");
const loginClose = document.getElementById("login-close");
const loginSection = document.getElementById("loginSection");
const showloginButton = document.getElementById("showloginButton");

function addFocusAndBlurEvents(div) {
  const input = div.querySelector("input");
  input.addEventListener("focus", function () {
    div.style.borderColor = secondary;
  });
  input.addEventListener("blur", function () {
    div.style.borderColor = "";
  });
}

if (loginemaildiv && loginpassworddiv) {
  showloginButton.addEventListener("click", function () {
    loginSection.classList.add("showlogin");
  });
  loginClose.addEventListener("click", function () {
    loginSection.classList.remove("showlogin");
  });
  addFocusAndBlurEvents(loginemaildiv);
  addFocusAndBlurEvents(loginpassworddiv);
}

// login end

//category in Product preview
const productCategory = document.getElementById("productCategory");
if (productCategory) {
  productCategory.addEventListener("mouseenter", function () {
    productCategory.classList.add("scrollbar");
    productCategory.classList.add("ek-overflow-y-scroll");
  });
  productCategory.addEventListener("mouseleave", function () {
    productCategory.classList.remove("ek-overflow-y-scroll");
  });
}

//category in Product preview end

// advertisement
function initializeCarousel(carouselId) {
  const carousel = document.getElementById(carouselId);
  const inner = carousel.querySelector('.carousel-inner');
  const slides = carousel.querySelectorAll('.carousel-inner > div');
  let currentIndex = 0;
  let isTransitioning = false;

  // Clone the first slide and append it to the end
  const firstSlideClone = slides[0].cloneNode(true);
  inner.appendChild(firstSlideClone);

  // Set the initial position for the slides
  inner.style.transition = 'transform 0.5s ease-in-out';
  inner.style.transform = 'translateX(0)';

  function showNextSlide() {
    if (isTransitioning) return;
    isTransitioning = true;

    // Update the index to the next slide
    currentIndex++;
    // Calculate the new position
    const newTransformValue = -currentIndex * 100;
    // Apply the transformation
    inner.style.transform = `translateX(${newTransformValue}%)`;

    // When we reach the cloned first slide, reset to the original first slide
    if (currentIndex === slides.length) {
      setTimeout(() => {
        inner.style.transition = 'none';
        inner.style.transform = 'translateX(0)';
        currentIndex = 0;
        // Force reflow to reset the transition
        inner.offsetHeight;
        inner.style.transition = 'transform 0.5s ease-in-out';
        isTransitioning = false;
      }, 500); // Duration of the transition
    } else {
      setTimeout(() => {
        isTransitioning = false;
      }, 500); // Duration of the transition
    }
  }

  // Initialize the carousel
  setInterval(showNextSlide, 3000); // Change slide every 3 seconds
}

// Initialize the carousel when the page loads
window.onload = function() {
  initializeCarousel('carousel1');
  initializeCarousel('carousel2');

};

// advertisement end

// signup and login toggle
const loginform = document.getElementById("loginform");
const signupform = document.getElementById("signupform");
const showsignup = document.getElementById("showsignup")
const showlogin = document.getElementById("showlogin")

function toggle(event,form1, form2 ) {
  event.preventDefault()
  form1.classList.toggle("ek-flex");
  form1.classList.toggle("ek-hidden");
  form2.classList.toggle("ek-hidden");
  form2.classList.toggle("ek-flex");
  
}
showlogin.addEventListener("click", (event) => toggle(event,loginform,signupform))
showsignup.addEventListener("click", (event) => toggle(event,signupform,loginform))


// signup and login toggle end
// scroll for section in product.html
document.addEventListener("DOMContentLoaded", function() {
  const scrollContainer = document.getElementById("scroll-container");
  const scrollLeft = document.getElementById("scroll-left");
  const scrollRight = document.getElementById("scroll-right");

  scrollLeft.addEventListener("click", function() {
    scrollContainer.scrollBy({
      left: -100,
      behavior: "smooth"
    });
  });

  scrollRight.addEventListener("click", function() {
    scrollContainer.scrollBy({
      left: 100,
      behavior: "smooth"
    });
  });
});
// scroll for section in product.html end


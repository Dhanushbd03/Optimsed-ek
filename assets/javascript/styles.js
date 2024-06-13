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
//floating Search 

const floatingSearchButton = document.getElementById("floatingSearchButton")
const floatingSearch  = document.getElementById("floatingSearch")

if (floatingSearchButton){
floatingSearchButton.addEventListener("click",function(){
  floatingSearch.classList.toggle("ek-hidden")
  floatingSearchButton.classList.toggle("ek-hidden")
})
}


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
const registerSignupMobile = document.getElementById("register-signup")
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
function DisplayLogin(div)
  {  div.addEventListener("click", function () {
    loginSection.classList.add("showlogin");
  });
}
  loginClose.addEventListener("click", function () {
    loginSection.classList.remove("showlogin");
  });
  addFocusAndBlurEvents(loginemaildiv);
  addFocusAndBlurEvents(loginpassworddiv);
  if(showloginButton)
  {DisplayLogin(showloginButton);}
  if(registerSignupMobile){
    DisplayLogin(registerSignupMobile);
  }
  

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
if(scrollContainer){
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
}});

// scroll for section in product.html end

// upvote and downvote 
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".vote-button").forEach(button => {
    
      button.addEventListener("click", () => {
          const voteContainer = button.closest(".vote-container");
          
          const voteCountElement = voteContainer.querySelector(".vote-count");
          let voteCount = parseInt(voteCountElement.textContent);

          if (button.classList.contains("upvote")) {
              voteCount++;
          } else if (button.classList.contains("downvote")) {
              voteCount--;
          }

          voteCountElement.textContent = voteCount;
      });
  });
});
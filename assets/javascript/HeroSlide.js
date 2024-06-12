const slideData = [
    {
        title: "Raspberry Pi 4",
        productName: "4GB RAM, 1.5GHz Quad-Core CPU",
        price: "9000.00",
        image: "assets/images/ekart/rpi-4-4gb416X420.png",
    },
    {
        title: "Arduino Uno",
        productName: "Development Kit",
        price: "1000.00",
        image: "assets/images/ekart/rpi-4-4gb416X420.png",
    },
    {
        title: "HC-SR04 Ultrasonic Sensor",
        productName: "Sensor",
        price: "2000.49",
        image: "assets/images/ekart/rpi-4-4gb416X420.png",
    },
    {
        title: "ESP8266 Wi-Fi Module",
        productName: "Module",
        price: "3999.99",
        image: "assets/images/ekart/rpi-4-4gb416X420.png",
    },
];
const heroSlideDiv = document.getElementById("heroSlideDiv");
slideData.forEach((slide) => {
const slideHtml = `
<div
            class="item ek-flex ek-w-screen ek-flex-col ek-items-center ek-bg-cover sm:ek-flex-row sm:ek-justify-center lg:ek-gap-10"
          >
            <div
              class="ek-order-1 ek-flex ek-max-w-[400px] ek-flex-col ek-p-5 sm:ek-py-14"
            >
              <h1 class="ek-line-clamp-2 ek-text-5xl ek-font-normal">
                ${slide.title}
              </h1>
              <p class="ek-mt-2 ek-line-clamp-2 ek-text-gray-600">
                ${slide.productName}
              </p>
              <p class="ek-mt-4 ek-text-sm ek-font-semibold">
                FROM <br /><span class="ek-text-5xl ek-text-black"
                  >₹${slide.price}</span
                >
              </p>
              <a
                href="product.html"
                class="ek-mt-6 ek-max-w-32 ek-rounded-lg ek-bg-primary ek-px-4 ek-py-2 ek-text-white hover:ek-bg-secondary"
              >
                Start Buying
              </a>
            </div>
            <div
              class="ek-flex ek-items-center ek-justify-center sm:ek-order-2"
            >
              <div class="ek-flex ek-items-center ek-justify-center">
                <img
                  src="${slide.image}"
                  alt="Arduino Uno"
                  class="ek-max-h-[300px] sm:ek-max-h-[420px]"
                />
              </div>
            </div>
          </div>
          `;
heroSlideDiv.innerHTML += slideHtml;
})

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


const advertisement1 = document.getElementById("advertisement1");
const advertisement2 = document.getElementById("advertisement2");

const advertisement1data = [
  {
    image: "assets/images/ekart/Raspberry-Pi-Zero-W-3-1.jpg",
  },
  {
    image:
      "assets/images/ekart/Uno-R3-CH340G-ATmega328p-Development-Board-Compatible-with-Arduino2-1-1.jpg",
  },

  {
    image: "assets/images/ekart/Raspberry-Pi-Zero-W-3-1.jpg",
  },
  {
    image:
      "assets/images/ekart/Uno-R3-CH340G-ATmega328p-Development-Board-Compatible-with-Arduino2-1-1.jpg",
  },
];

const advertisement2data = [
  {
    image:
      "assets/images/ekart/Uno-R3-CH340G-ATmega328p-Development-Board-Compatible-with-Arduino2-1-1.jpg",
  },
  {
    image: "assets/images/ekart/Raspberry-Pi-Zero-W-3-1.jpg",
  },
  {
    image:
      "assets/images/ekart/Uno-R3-CH340G-ATmega328p-Development-Board-Compatible-with-Arduino2-1-1.jpg",
  },
  {
    image: "assets/images/ekart/Raspberry-Pi-Zero-W-3-1.jpg",
  },
];

function createAdvertisementHTML(advertisementData) {
  return advertisementData
    .map(
      (ad) => `
        <div class="ek-absolute ek-w-full fade ek-top-0 ek-left-0" >
            <img
              src="${ad.image}"
              class="ek-max-h-80 ek-min-h-80 ek-w-full ek-object-cover"
              alt="Advertisement Image"
            />
        </div>
    `,
    )
    .join("");
}

advertisement1.innerHTML = createAdvertisementHTML(advertisement1data);

advertisement2.innerHTML = createAdvertisementHTML(advertisement2data);

function showCarousel(divId) {
  const carouselDiv = document.querySelector(`#${divId}`);
  const carouselItems = Array.from(carouselDiv.children);
  const totalItems = carouselItems.length;
  let currentIndex = 0;

  function showNextImage() {
    carouselItems[currentIndex].classList.remove("show");
    currentIndex = (currentIndex + 1) % totalItems;
    carouselItems[currentIndex].classList.add("show");
  }

  // Initially show the first image
  carouselItems[currentIndex].classList.add("show");

  // Change image every 3 seconds
  setInterval(showNextImage, 5000);
}

showCarousel("advertisement1");
showCarousel("advertisement2");

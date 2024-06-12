const relatedProducts = document.getElementById("related-products");
const relatedProductsData = [
  {
    title: "single boards",
    productName: "12V DC Motor with Gearbox",
    price: "1000.00",
    image: "assets/images/products/shopping (1).webp",
  },
  {
    title: "development kits",
    productName: "Arduino Uno R3",
    price: "2500.99",
    image: "assets/images/products/shopping (2).webp",
  },
  {
    title: "sensors",
    productName: "HC-SR04 Ultrasonic Sensor",
    price: "2000.49",
    image: "assets/images/products/shopping (3).webp",
  },
  {
    title: "modules",
    productName: "ESP8266 Wi-Fi Module",
    price: "3999.99",
    image: "assets/images/products/shopping (4).webp",
  },
];

if (relatedProducts) {
  relatedProducts.innerHTML = "";

  relatedProductsData.forEach((product) => {
    const productHTML = `
      <div class="ek-flex ek-min-w-[12rem] ek-max-w-[12rem] ek-flex-col ek-justify-between ek-rounded-lg ek-border ek-border-gray-100 ek-p-5 ek-shadow-black hover:ek-shadow-2xl sm:ek-min-w-[10rem] sm:ek-max-w-[10rem] lg:ek-min-w-[11rem] lg:ek-max-w-[11rem] xl:ek-min-w-[14rem] xl:ek-max-w-[14rem] 2xl:ek-min-w-[14rem] 2xl:ek-max-w-[14rem] tiny:ek-min-w-[11rem] tiny:ek-max-w-[11rem]">
        <p class="ek-mb-2 ek-text-[12px] ek-text-gray-700">${product.title}</p>
        <h5 class="ek-mb-4 ek-line-clamp-2 ek-font-semibold">${product.productName}</h5>
        <div class="ek-mb-4 ek-flex ek-items-center ek-justify-center">
          <img src="${product.image}" alt="${product.productName}" class="ek-max-h-[135px] ek-min-h-[135px] ek-w-full ek-object-contain xl:ek-max-h-[200px] xl:ek-min-h-[200px] xl:ek-min-w-[200px] xl:ek-max-w-[200px]" />
        </div>
        <div class="ek-flex ek-items-center ek-gap-2  ek-justify-between">
          <p class="ek-text-xl ek-font-bold">₹${product.price}</p>
          <div class="ek-rounded-full ek-bg-primary ek-px-3 ek-py-2 ">
            <i class="ec ec-add-to-cart sm:ek-text-sm ek-text-xl ek-text-white"></i>
          </div>
        </div>
      </div>`;

    relatedProducts.innerHTML += productHTML;
  });
}

const advertisement1 = document.getElementById("advertisement1");
const advertisement2 = document.getElementById("advertisement2");

const advertisement1data = [
    { image: "https://picsum.photos/seed/0/200/300" },
    { image: "https://picsum.photos/seed/9/200/300" },
    { image: "https://picsum.photos/seed/2/200/300" },
    { image: "https://picsum.photos/seed/3/200/300" }
];

const advertisement2data = [
    { image: "https://picsum.photos/seed/4/200/300" },
    { image: "https://picsum.photos/seed/5/200/300" },
    { image: "https://picsum.photos/seed/6/200/300" },
    { image: "https://picsum.photos/seed/7/200/300" }
];

function createAdvertisementHTML(advertisementData) {
    return advertisementData.map(ad => `
        <div class="ek-absolute ek-w-full fade">
            <img
              src="${ad.image}"
              class="ek-max-h-80 ek-min-h-80 ek-w-full ek-object-cover"
              alt="Advertisement Image"
            />
        </div>
    `).join('');
}

if (advertisement1) {
    advertisement1.innerHTML = createAdvertisementHTML(advertisement1data);
}

if (advertisement2) {
    advertisement2.innerHTML = createAdvertisementHTML(advertisement2data);
}

function showCarousel(divId) {
    const carouselDiv = document.querySelector(`#${divId}`);
    const carouselItems = Array.from(carouselDiv.children);
    const totalItems = carouselItems.length;
    let currentIndex = 0;

    function showNextImage() {
        carouselItems[currentIndex].classList.remove('show');
        currentIndex = (currentIndex + 1) % totalItems;
        carouselItems[currentIndex].classList.add('show');
    }

    // Initially show the first image
    carouselItems[currentIndex].classList.add('show');

    // Change image every 3 seconds
    setInterval(showNextImage, 5000);
}

showCarousel("advertisement1");
showCarousel("advertisement2");

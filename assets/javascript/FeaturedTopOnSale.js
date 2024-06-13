const featured = document.getElementById("featured");
const onsale = document.getElementById("onsale");
const toprated = document.getElementById("toprated");

// products section

// Get elements by their IDs
const clickfeatured = document.getElementById("clickfeatured");
const clickonsale = document.getElementById("clickonsale");
const clicktoprated = document.getElementById("clicktoprated");

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
const featuredData = [
  {
    title: "SD Card Module",
    productName: "MicroSD Storage",
    price: "350.75",
    image: "assets/images/products/shopping (4).webp",
},
    {
        title: "Raspberry Pi 4",
        productName: "4GB RAM",
        price: "5000.00",
        image: "assets/images/products/shopping (1).webp",
    },
    {
        title: "Arduino Uno",
        productName: "Development Kit",
        price: "1000.00",
        image: "assets/images/products/shopping (2).webp",
    },
    {
        title: "HC-SR04 Ultrasonic Sensor",
        productName: "Sensor",
        price: "2000.49",
        image: "assets/images/products/shopping (3).webp",
    },
    {
        title: "ESP8266 Wi-Fi Module",
        productName: "Module",
        price: "3999.99",
        image: "assets/images/products/shopping (4).webp",
    },
    {
        title: "TCS34725 RGB Sensor",
        productName: "Color Sensor",
        price: "1500.75",
        image: "assets/images/products/shopping (5).webp",
    },
    {
        title: "Micro:bit V2",
        productName: "Starter Kit",
        price: "2999.50",
        image: "assets/images/products/shopping (6).webp",
    },
    {
        title: "NodeMCU",
        productName: "ESP8266 Development Board",
        price: "2500.00",
        image: "assets/images/products/shopping (7).webp",
    },
    {
        title: "BMP180 Barometric Sensor",
        productName: "Sensor",
        price: "1200.25",
        image: "assets/images/products/shopping (8).webp",
    },
];
const onsaleData = [
  {
    title: "SD Card Module",
    productName: "MicroSD Storage",
    price: "350.75",
    image: "assets/images/products/shopping (4).webp",
},
    {
        title: "OLED Display Module",
        productName: "0.96 Inch Screen",
        price: "800.00",
        image: "assets/images/products/shopping.webp",
    },
    {
        title: "DS18B20 Temperature Sensor",
        productName: "Sensor",
        price: "600.49",
        image: "assets/images/products/shopping (1).webp",
    },
    {
        title: "L298N Motor Driver",
        productName: "Module",
        price: "900.75",
        image: "assets/images/products/shopping (2).webp",
    },
    {
        title: "DHT22 Temperature and Humidity Sensor",
        productName: "Sensor",
        price: "1100.30",
        image: "assets/images/products/shopping (3).webp",
    },
    {
        title: "Step-Down Voltage Regulator",
        productName: "5V/3A Module",
        price: "700.45",
        image: "assets/images/products/shopping (4).webp",
    },
    {
        title: "MPU6050 Gyro Sensor",
        productName: "Accelerometer",
        price: "1300.50",
        image: "assets/images/products/shopping (5).webp",
    },
    {
        title: "Breadboard",
        productName: "830 Tie Points",
        price: "300.99",
        image: "assets/images/products/shopping (6).webp",
    },
    {
        title: "Relay Module",
        productName: "4 Channel 5V",
        price: "500.25",
        image: "assets/images/products/shopping (7).webp",
    },
];
const topratedData = [
    {
        title: "Servo Motor",
        productName: "SG90",
        price: "250.00",
        image: "assets/images/products/shopping (8).webp",
    },
    {
        title: "LiPo Battery",
        productName: "3.7V 1200mAh",
        price: "450.75",
        image: "assets/images/products/shopping.webp",
    },
    {
        title: "IR Remote Control Kit",
        productName: "Infrared Receiver",
        price: "350.40",
        image: "assets/images/products/shopping (1).webp",
    },
    {
        title: "ESP32 Development Board",
        productName: "WiFi+Bluetooth",
        price: "2700.99",
        image: "assets/images/products/shopping (2).webp",
    },
    {
        title: "Proximity Sensor",
        productName: "Infrared Sensor",
        price: "800.30",
        image: "assets/images/products/shopping (3).webp",
    },
    {
        title: "SD Card Module",
        productName: "MicroSD Storage",
        price: "350.75",
        image: "assets/images/products/shopping (4).webp",
    },
    {
        title: "PIR Motion Sensor",
        productName: "Sensor",
        price: "500.50",
        image: "assets/images/products/shopping (5).webp",
    },
    {
        title: "I2C LCD Display",
        productName: "16x2 Screen",
        price: "600.00",
        image: "assets/images/products/shopping (6).webp",
    },
    {
      title: "SD Card Module",
      productName: "MicroSD Storage",
      price: "350.75",
      image: "assets/images/products/shopping (4).webp",
  },
    
];



function renderProducts(data, container) {
    
    data.forEach((item) => {
        container.innerHTML += `
        <a href="product.html">
          <div
                  class="ek-flex ek-min-w-[12rem] ek-max-w-[12rem] ek-flex-col ek-justify-between ek-rounded-lg ek-border ek-border-gray-100 ek-p-5 ek-shadow-black hover:ek-shadow-2xl sm:ek-min-w-[12rem] sm:ek-max-w-[12rem] xl:ek-min-w-[15rem] xl:ek-max-w-[15rem] tiny:ek-min-w-[11rem] tiny:ek-max-w-[11rem]"
                >
                  <p class="ek-mb-2 ek-text-[12px] ek-text-gray-700">
                    ${item.title}
                  </p>
                  <h5 class="ek-mb-4 ek-line-clamp-2 ek-font-semibold">
                      ${item.productName}
                  </h5>
                  <div class="ek-mb-4 ek-flex ek-items-center ek-justify-center">
                    <img
                      src="${item.image}"
                      alt="Product 1"
                      class="ek-max-h-[135px] ek-min-h-[135px] ek-w-full ek-object-contain xl:ek-max-h-[200px] xl:ek-min-h-[200px] xl:ek-min-w-[200px] xl:ek-max-w-[200px]"
                    />
                  </div>
                  <div class="ek-flex ek-items-center ek-justify-between">
                    <p class="ek-text-xl ek-font-bold">₹ ${item.price}</p>
                    <div class="ek-rounded-full ek-bg-primary ek-px-3 ek-py-2">
                      <i class="ec ec-add-to-cart ek-text-xl ek-text-white"></i>
                    </div>
                  </div>
                </div>
        </a>`;
});

}

renderProducts(featuredData, featured);
renderProducts(onsaleData, onsale);
renderProducts(topratedData, toprated);




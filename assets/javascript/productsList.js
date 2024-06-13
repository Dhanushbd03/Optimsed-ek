
const productsList = document.getElementById("productsList");
const productsListData = [
    
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
        title: "DC Motor",
        productName: "6V Motor",
        price: "150.00",
        image: "assets/images/products/shopping (8).webp",
    },
    {
        title: "Lithium Battery",
        productName: "3.7V 1800mAh",
        price: "500.75",
        image: "assets/images/products/shopping.webp",
    },
    {
        title: "Ultrasonic Sensor",
        productName: "Distance Sensor",
        price: "400.00",
        image: "assets/images/products/shopping (1).webp",
    },
    {
        title: "Arduino Uno R3",
        productName: "Microcontroller",
        price: "1500.99",
        image: "assets/images/products/shopping (2).webp",
    },
    {
        title: "Temperature Sensor",
        productName: "Thermistor",
        price: "300.30",
        image: "assets/images/products/shopping (3).webp",
    },
    {
        title: "Relay Module",
        productName: "5V Relay",
        price: "200.75",
        image: "assets/images/products/shopping (4).webp",
    },
    {
        title: "Sound Sensor",
        productName: "Microphone Module",
        price: "350.50",
        image: "assets/images/products/shopping (5).webp",
    },
    {
        title: "OLED Display",
        productName: "0.96 inch Screen",
        price: "700.00",
        image: "assets/images/products/shopping (6).webp",
    },
    {
        title: "Stepper Motor",
        productName: "28BYJ-48",
        price: "450.00",
        image: "assets/images/products/shopping (8).webp",
    },
    {
        title: "Rechargeable Battery",
        productName: "7.4V 2200mAh",
        price: "750.75",
        image: "assets/images/products/shopping.webp",
    },
    {
        title: "Bluetooth Module",
        productName: "HC-05",
        price: "550.40",
        image: "assets/images/products/shopping (1).webp",
    },
    {
        title: "NodeMCU",
        productName: "ESP8266",
        price: "1200.99",
        image: "assets/images/products/shopping (2).webp",
    },
    {
        title: "Gas Sensor",
        productName: "MQ-2",
        price: "850.30",
        image: "assets/images/products/shopping (3).webp",
    },
    {
        title: "RFID Module",
        productName: "RC522",
        price: "450.75",
        image: "assets/images/products/shopping (4).webp",
    },
    {
        title: "Flame Sensor",
        productName: "Fire Detection",
        price: "650.50",
        image: "assets/images/products/shopping (5).webp",
    },
    {
        title: "Touch Screen",
        productName: "2.4 inch TFT",
        price: "1800.00",
        image: "assets/images/products/shopping (6).webp",
    },
    {
        title: "Linear Actuator",
        productName: "12V Actuator",
        price: "950.00",
        image: "assets/images/products/shopping (8).webp",
    },
    {
        title: "Power Bank",
        productName: "10000mAh",
        price: "1200.75",
        image: "assets/images/products/shopping.webp",
    },
    {
        title: "Light Sensor",
        productName: "LDR Module",
        price: "300.40",
        image: "assets/images/products/shopping (1).webp",
    },
    {
        title: "Mega 2560",
        productName: "Arduino Compatible",
        price: "2500.99",
        image: "assets/images/products/shopping (2).webp",
    },
    {
        title: "Hall Sensor",
        productName: "Magnetic Sensor",
        price: "500.30",
        image: "assets/images/products/shopping (3).webp",
    },
    {
        title: "Breadboard",
        productName: "830 Tie-Points",
        price: "150.75",
        image: "assets/images/products/shopping (4).webp",
    },
    {
        title: "Laser Module",
        productName: "Laser Diode",
        price: "300.50",
        image: "assets/images/products/shopping (5).webp",
    },
    {
        title: "Graphic LCD",
        productName: "128x64",
        price: "1000.00",
        image: "assets/images/products/shopping (6).webp",
    },
    {
        title: "Mini Servo",
        productName: "SG92R",
        price: "200.00",
        image: "assets/images/products/shopping (8).webp",
    },
    {
        title: "Button Cell Battery",
        productName: "3V CR2032",
        price: "50.75",
        image: "assets/images/products/shopping.webp",
    },
    {
        title: "Moisture Sensor",
        productName: "Soil Hygrometer",
        price: "150.40",
        image: "assets/images/products/shopping (1).webp",
    },
    {
        title: "Raspberry Pi 4",
        productName: "4GB RAM",
        price: "3500.99",
        image: "assets/images/products/shopping (2).webp",
    },
    {
        title: "Color Sensor",
        productName: "TCS3200",
        price: "600.30",
        image: "assets/images/products/shopping (3).webp",
    },
];

productsListData.forEach((product) => {
    productsList.innerHTML += `
    <a href="product.html">
        <div
                    class="ek-flex ek-min-w-[12rem] ek-max-w-[12rem] ek-flex-col ek-justify-between ek-rounded-lg ek-border ek-border-gray-100 ek-p-5 ek-shadow-black hover:ek-shadow-2xl sm:ek-min-w-[12rem] sm:ek-max-w-[12rem] xl:ek-min-w-[15rem] xl:ek-max-w-[15rem] tiny:ek-min-w-[11rem] tiny:ek-max-w-[11rem]"
                  >
                    <p class="ek-mb-2 ek-text-[12px] ek-text-gray-700">
                      ${product.title}
                    </p>
                    <h5 class="ek-mb-4 ek-line-clamp-2 ek-font-semibold">
                        ${product.productName}
                    </h5>
                    <div class="ek-mb-4 ek-flex ek-items-center ek-justify-center">
                      <img
                        src="${product.image}"
                        alt="Product 1"
                        class="ek-max-h-[135px] ek-min-h-[135px] ek-w-full ek-object-contain xl:ek-max-h-[200px] xl:ek-min-h-[200px] xl:ek-min-w-[200px] xl:ek-max-w-[200px]"
                      />
                    </div>
                    <div class="ek-flex ek-items-center ek-justify-between">
                      <p class="ek-text-xl ek-font-bold">₹ ${product.price}</p>
                      <div class="ek-rounded-full ek-bg-primary ek-px-3 ek-py-2">
                        <i class="ec ec-add-to-cart ek-text-xl ek-text-white"></i>
                      </div>
                    </div>
                  </div>
    </a>`;
});



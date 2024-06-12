const categoryBox = document.getElementById("categoryBoxes");
const categoryData = [
  {
    imgSrc: "assets/images/category/Development-boards-1.webp",
    imgAlt: "Sensor Image",
    title: "Electronic Components",
    link: "productsList.html",
  },
  {
    imgSrc: "assets/images/category/Lithium-Ion-Battery-2.webp",
    imgAlt: "Sensor Image",
    title: "Semiconductor IC",
    link: "#",
  },
  {
    imgSrc: "assets/images/category/Drone-kits-3.webp",
    imgAlt: "Drone Parts Image",
    title: "Sensors",
    link: "#",
  },
  {
    imgSrc: "assets/images/category/Sensors-4.webp",
    imgAlt: "Sensors Modules Image",
    title: "Communication modules",
    link: "#",
  },
  {
    imgSrc: "assets/images/category/Motors-5.webp",
    imgAlt: "Motors Drivers Image",
    title: "Development Boards",
    link: "#",
  },
  {
    imgSrc: "assets/images/category/IoT-Wireless-6.webp",
    imgAlt: "IoT and Wireless Image",
    title: "Motor, drivers & Actuators",
    link: "#",
  },
  {
    imgSrc: "assets/images/category/Electronic-Components-7.webp",
    imgAlt: "Electronic Components Image",
    title: "3D printers and parts",
    link: "#",
  },
  {
    imgSrc: "assets/images/category/Electronic-Components-8.webp",
    imgAlt: "Electronic Modules and Displays Image",
    title: "Drones and Accessories",
    link: "#",
  },
  {
    imgSrc: "assets/images/category/3D-Printer-Parts-9.webp",
    imgAlt: "3D Printers and Parts Image",
    title: "Display",
    link: "#",
  },
  {
    imgSrc: "assets/images/category/Mechanical-Components-10.webp",
    imgAlt: "Mechanical Parts Image",
    title: "Speakers",
    link: "#",
  },
  {
    imgSrc: "assets/images/category/E-Bikes-11.webp",
    imgAlt: "Electric Vehicle Parts Image",
    title: "Tiny Computers",
    link: "#",
  },
  {
    imgSrc: "assets/images/category/DIY-kits-2-12.webp",
    imgAlt: "DIY Learning and Robot Kits Image",
    title: "DIY Learning and Robot Kits",
    link: "#",
  },
];
categoryData.forEach((category) => {
  categoryBox.innerHTML += `
    <div
            class="ek-flex ek-w-full ek-rounded-lg ek-bg-gray-100 ek-shadow-md hover:ek-shadow-gray-500 sm:ek-w-2/5 xl:ek-w-1/5"
          >
            <div class="ek-w-1/3 lg:ek-w-2/5">
              <img
                src="${category.imgSrc}"
                alt="${category.imgAlt}"
                class="ek-w-[200px] ek-rounded-l-lg md:ek-w-[150px]"
              />
            </div>
            <div class="ek-my-auto ek-w-2/3 ek-p-2 ek-px-4">
              <h1 class="ek-break-words ek-text-base ek-font-bold">
                ${category.title}
              </h1>
              <button class="ek-py-2 ek-text-end">
                <a
                  href="${category.link}"
                  class="group ek-mx-auto ek-flex ek-text-nowrap ek-text-sm"
                >
                  shop now
                  <div
                    class="ek-mx-1 ek-flex ek-items-center ek-justify-center ek-rounded-full ek-bg-primary hover:ek-bg-secondary"
                  >
                    <i
                      class="ec ec-close-remove ek-p-1 ek-text-white"
                      style="font-size: 10px"
                    ></i>
                  </div>
                </a>
              </button>
            </div>
          </div>`;
});

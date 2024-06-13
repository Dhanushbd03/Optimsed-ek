const subCategory = document.getElementById("subCategory");
const subCategoryData = [
  {
    categoryName: "Sensors",
    image: "assets\\images\\subCategory\\electronicComponents\\Sensor.png",
    link: "productsList.html",
  },
  {
    categoryName: "Resistors",
    image: "assets\\images\\subCategory\\electronicComponents\\Diodes.jpg",
    link: "#",
  },
  {
    categoryName: "Capacitors",
    image: "assets\\images\\subCategory\\electronicComponents\\Capacitors.jpg",
    link: "#",
  },
  {
    categoryName: "Inductors",
    image: "assets\\images\\subCategory\\electronicComponents\\Inductors.jpg",
    link: "#",
  },
  {
    categoryName: "Diodes",
    image: "assets\\images\\subCategory\\electronicComponents\\Diodes.jpg",
    link: "#",
  },
  {
    categoryName: "Transistors",
    image: "assets\\images\\subCategory\\electronicComponents\\Transistors.jpg",
    link: "#",
  },
  {
    categoryName: "Integrated Circuits",
    image:
      "assets\\images\\subCategory\\electronicComponents\\IntegratedCircuits.jpg",
    link: "#",
  },
  {
    categoryName: "Relays",
    image: "assets\\images\\subCategory\\electronicComponents\\Relays.jpg",
    link: "#",
  },
  {
    categoryName: "Connectors",
    image: "assets\\images\\subCategory\\electronicComponents\\Connectors.jpg",
    link: "#",
  },
  {
    categoryName: "Switches",
    image: "assets\\images\\subCategory\\electronicComponents\\Switches.jpg",
    link: "#",
  },
  {
    categoryName: "Microcontrollers",
    image:
      "assets\\images\\subCategory\\electronicComponents\\Microcontrollers.jpg",
    link: "#",
  },
  {
    categoryName: "Batteries",
    image: "assets\\images\\subCategory\\electronicComponents\\Capacitors.jpg",
    link: "#",
  },
  {
    categoryName: "Power Supplies",
    image: "assets\\images\\subCategory\\electronicComponents\\Capacitors.jpg",
    link: "#",
  },
  {
    categoryName: "Oscillators",
    image: "assets\\images\\subCategory\\electronicComponents\\Capacitors.jpg",
    link: "#",
  },
  {
    categoryName: "Transformers",
    image: "assets\\images\\subCategory\\electronicComponents\\Capacitors.jpg",
    link: "#",
  },
];

subCategoryData.forEach((item) => {
  subCategory.innerHTML += `
   <a href="${item.link}">
        <div class="ek-flex ek-flex-col  ek-p-2 ek-rounded-lg  hover:ek-shadow-md hover:ek-shadow-gray-700 ek-min-w-[212px] ek-max-w-[212px] ek-min-h-[212px] ek-max-h-[212px] xl:ek-min-h-[250px] xl:ek-max-h-[250px] ek-text-ellipsis ek-transition-shadow ek-cursor-pointer ek-duration-100 ek-border-x-2 ek-border-gray-100 "
              >
                <div class="ek-flex ek-justify-center ek-m-2">
                  <img
                    src="${item.image}"
                    alt=""
                    class="xl:ek-w-[200px] xl:ek-h-[180px] lg:ek-w-[180px] lg:ek-h-[150px] ek-rounded-lg "
                  />
                </div>
                <div class="ek-p-2 ek-flex ek-justify-center">
                  <h1 class="ek-break-words ek-text-base ek-font-bold ek-w-full ek-text-center ">
                    ${item.categoryName}
                  </h1>
                </div>
              </div>
   </a>
    `;
});

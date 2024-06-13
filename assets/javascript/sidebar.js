


const sidebar = document.getElementById("sidebar");
const sidebarData = [
    {
      name: "Shop by Brand",
      link: "#",
      subMenu: [
        { name: "Brand A", link: "#" },
        { name: "Brand B", link: "#" }
      ]
    },
    {
      name: "New Arrivals",
      link: "#",
      subMenu: []
    },
    {
      name: "Electronic Components",
      link: "#",
      subMenu: [
        { name: "Resistors", link: "#" },
        { name: "Capacitors", link: "#" },
        { name: "Inductors", link: "#" }
      ]
    },
    {
      name: "Semiconductor IC",
      link: "#",
      subMenu: [
        { name: "Microcontrollers", link: "#" },
        { name: "Memory ICs", link: "#" }
      ]
    },
    {
      name: "Sensors",
      link: "#",
      subMenu: [
        { name: "Temperature Sensors", link: "#" },
        { name: "Pressure Sensors", link: "#" }
      ]
    },
    {
      name: "Communication modules",
      link: "#",
      subMenu: []
    },
    {
      name: "Development Boards",
      link: "#",
      subMenu: [
        { name: "Arduino", link: "#" },
        { name: "Raspberry Pi", link: "#" }
      ]
    },
    {
      name: "Motor & drivers",
      link: "#",
      subMenu: []
    },
    {
      name: "3D printers and parts",
      link: "#",
      subMenu: []
    },
    {
      name: "Drones and accessories",
      link: "#",
      subMenu: []
    },
    {
      name: "Display",
      link: "#",
      subMenu: []
    },
    {
      name: "Speakers",
      link: "#",
      subMenu: []
    },
    {
      name: "Tiny Computers",
      link: "#",
      subMenu: []
    },
    {
      name: "DIY learning and Robo kits",
      link: "#",
      subMenu: []
    },
    {
      name: "Cameras",
      link: "#",
      subMenu: []
    },
    {
      name: "Electric vehicle parts",
      link: "#",
      subMenu: []
    },
    {
      name: "Wires, Connectors and cables",
      link: "#",
      subMenu: []
    },
    {
      name: "Batteries and Chargers",
      link: "#",
      subMenu: []
    },
    {
      name: "Solar panels and Accessories",
      link: "#",
      subMenu: []
    },
    {
      name: "Power Supply",
      link: "#",
      subMenu: []
    },
    {
      name: "Electronic tools",
      link: "#",
      subMenu: []
    },
    {
      name: "Robotics",
      link: "#",
      subMenu: []
    },
    {
      name: "Electronic Modules",
      link: "#",
      subMenu: []
    },
    {
      name: "Computer and accessories",
      link: "#",
      subMenu: []
    },
  ];
  
  sidebarData.forEach((item) => {
    let subMenuHTML = '';
    if (item.subMenu && item.subMenu.length > 0) {
        subMenuHTML = `<ul class="sidebar ek-ml-4 ek-hidden">`;
        item.subMenu.forEach((subItem) => {
            subMenuHTML += `
                <li class="sidebar2">
                    <a href="${subItem.link}" class="ek-flex ek-items-center ek-p-2 hover:ek-bg-primary hover:ek-text-white">
                        ${subItem.name}
                    </a>
                </li>`;
        });
        subMenuHTML += `</ul>`;
    }

    const sidebarHTML = `
        <li class="sidebar-option">
            <div class="ek-flex ek-items-center ek-justify-between ek-p-2 hover:ek-bg-primary hover:ek-text-white">
                <div class="ek-flex ek-items-center">
                    <span>${item.name}</span>
                </div>
                ${subMenuHTML ? `<i class="fas fa-chevron-up ek-rotate-180 ek-text-xs"></i>` : ''}
            </div>
            ${subMenuHTML}
        </li>`;

    sidebar.innerHTML += sidebarHTML;
});

// sidebar

document.addEventListener("DOMContentLoaded", function () {
    // Function to toggle visibility and body scroll
    function toggleVisibility(element, className) {
      element.classList.toggle(className);
    }
  
    // Function to toggle the sidebar
    function toggleSidebar() {
      toggleVisibility(sidebarDiv, "showsidebar");
      document.body.classList.toggle("no-scroll", sidebarDiv.classList.contains("showsidebar"));
      sidebarclosebutton.classList.toggle("ek-hidden");
    }
  
    // Toggle sidebar visibility
    const sidebarButton = document.getElementById("sidebarbutton");
    const sidebarDiv = document.getElementById("sidebardiv");
    const sidebarclosebutton = document.querySelector("#sidebarclosebutton div");
    sidebarclosebutton.classList.add("ek-hidden");
  
    sidebarButton.addEventListener("click", toggleSidebar);
    sidebarclosebutton.addEventListener("click", toggleSidebar);

    // Function to toggle dropdown options
    function toggleDropdown(option, selector) {
      option.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent event bubbling for nested options
        const sidebar = option.querySelector(selector);
        const fas = option.querySelector(".fas");
        if (sidebar) {
          fas.classList.toggle("ek-rotate-180");
          toggleVisibility(sidebar, "ek-hidden");
        }
      });
    }
  
    // Toggle main sidebar options
    document.querySelectorAll(".sidebar-option").forEach(function (option) {
      toggleDropdown(option, ".sidebar");
    });
  
    // Toggle second-level sidebar options
    document.querySelectorAll(".sidebar2").forEach(function (option) {
      toggleDropdown(option, ".sidebar3");
    });
  });
// sidebar end

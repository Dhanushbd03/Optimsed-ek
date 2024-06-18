<header>
  <!-- topbar -->
  <div class="ek-hidden ek-flex-col ek-justify-between ek-bg-gray-100 ek-px-4 ek-py-2 ek-text-sm lg:ek-flex lg:ek-flex-row lg:ek-px-10">
    <div class="ek-mb-2 ek-flex ek-justify-start md:ek-mb-0">
      <span class="ek-flex ek-items-center">
        <span>Customer Support :&nbsp;</span><i class="ec ec-call ek-text-sm"></i> &nbsp;+91 8892882988 |
        <i class="ec ec-email ek-text-base"></i>&nbsp;
        support@electronickart.com
      </span>
    </div>
    <div class="ek-flex ek-items-center ek-gap-1">
      <span><a href="#accounts" class="ek-flex ek-items-center"><i class="mr-1 ec ec-transport ek-text-xl"></i>&nbsp;Track your
          order</a> </span>|

      <span><a id="showloginButton" role="button" class="ek-flex ek-items-center ek-gap-1">
          <i class="ec ec-user ek-text-xl"></i> Register
          <span class="ek-text-gray-500">or</span>
          Sign in
        </a></span>
    </div>
  </div>
  <!-- topbar end -->
  <!-- navbar -->
  <nav class="ek-shadow-md">
    <div class="ek-flex ek-items-center ek-justify-between lg:ek-gap-5 ek-bg-white ek-px-4 lg:ek-px-10 lg:ek-py-4">
      <!-- right side navbar  -->
      <div class="ek-flex ek-items-center ek-p-2">
        <!-- Logo -->
        <a href="index.php" class="ek-order-1 ek-mr-2 md:ek-order-none">
          <img src="assets/images/logo/logo.png" alt="Electronickart Logo" class="ek-h-8 ek-min-h-12 ek-min-w-40 md:ek-min-h-16 md:ek-min-w-52" />
        </a>
        <!-- Logo end -->
        <!-- Menu icon  -->
        <button class="ek-order-none ek-block ek-text-gray-600 md:ek-order-1" id="sidebarbutton">
          <i class="ec ec-menu ek-p-2 ek-text-2xl ek-text-primary hover:ek-text-secondary"></i>
        </button>
        <!-- Menu icon end -->
      </div>
      <!-- right side navbar end  -->

      <!-- center navbar  -->
      <div class="ek-hidden ek-grow lg:ek-flex">
        <div class="ek-flex ek-w-full ek-items-center ek-overflow-hidden ek-rounded-lg ek-border-2 ek-border-primary ek-bg-primary" id="searchdiv">
          <!-- select  -->
          <div class="ek-h-full" id="select">
            <button id="selectbtn" class="ek-line-clamp-1 ek-flex ek-max-w-48 ek-items-center ek-justify-between ek-text-nowrap ek-bg-white ek-p-2 ek-ring-1 ek-ring-gray-300">
              <span id="selected">All Categories </span>
              &nbsp;<i class="fas fa-chevron-down ek-text-sm"></i>
            </button>

            <ul class="scrollbar ltr ek-absolute ek-z-50 ek-mt-1 ek-flex ek-hidden ek-max-h-[490px] ek-flex-col ek-overflow-y-scroll ek-bg-gray-50 ek-ring-1 ek-ring-gray-300" id="selectMenu">
              <li class="ek-cursor-pointer ek-select-none ek-p-2 hover:ek-bg-primary hover:ek-text-white" data-language="All Categories">
                All categories
              </li>
              <li class="ek-cursor-pointer ek-select-none ek-p-2 hover:ek-bg-primary hover:ek-text-white" data-language="New Arrivals">
                New Arrivals
              </li>
              <li class="ek-cursor-pointer ek-select-none ek-p-2 hover:ek-bg-primary hover:ek-text-white" data-language="SmartElex">
                SmartElex
              </li>
              <li class="ek-cursor-pointer ek-select-none ek-p-2 hover:ek-bg-primary hover:ek-text-white" data-language="Electronic Components">
                Electronic Components
              </li>
              <li class="ek-cursor-pointer ek-select-none ek-p-2 hover:ek-bg-primary hover:ek-text-white" data-language="DIY Learning and Robot Kits">
                DIY Learning and Robot Kits
              </li>
              <li class="ek-cursor-pointer ek-select-none ek-p-2 hover:ek-bg-primary hover:ek-text-white" data-language="Drone Parts">
                Drone Parts
              </li>
              <li class="ek-cursor-pointer ek-select-none ek-p-2 hover:ek-bg-primary hover:ek-text-white" data-language="Electric Vehicle Parts">
                Electric Vehicle Parts
              </li>
              <li class="ek-cursor-pointer ek-select-none ek-p-2 hover:ek-bg-primary hover:ek-text-white" data-language="Laser Engraver and CNC Machines">
                Laser Engraver and CNC Machines
              </li>
              <li class="ek-cursor-pointer ek-select-none ek-p-2 hover:ek-bg-primary hover:ek-text-white" data-language="3D Printers and Parts">
                3D Printers and Parts
              </li>
              <li class="ek-cursor-pointer ek-select-none ek-p-2 hover:ek-bg-primary hover:ek-text-white" data-language="Batteries, Chargers and Accessories">
                Batteries, Chargers and Accessories
              </li>
              <li class="ek-cursor-pointer ek-select-none ek-p-2 hover:ek-bg-primary hover:ek-text-white" data-language="Motors, Drivers, Actuators">
                Motors, Drivers, Actuators
              </li>
              <li class="ek-cursor-pointer ek-select-none ek-p-2 hover:ek-bg-primary hover:ek-text-white" data-language="Development Board">
                Development Board
              </li>
              <li class="ek-cursor-pointer ek-select-none ek-p-2 hover:ek-bg-primary hover:ek-text-white" data-language="Raspberry Pi">
                Raspberry Pi
              </li>
              <li class="ek-cursor-pointer ek-select-none ek-p-2 hover:ek-bg-primary hover:ek-text-white" data-language="Official Arduino Boards">
                Official Arduino Boards
              </li>
              <li class="ek-cursor-pointer ek-select-none ek-p-2 hover:ek-bg-primary hover:ek-text-white" data-language="Display Modules">
                Display Modules
              </li>
              <li class="ek-cursor-pointer ek-select-none ek-p-2 hover:ek-bg-primary hover:ek-text-white" data-language="Sensors Modules">
                Sensors Modules
              </li>
              <li class="ek-cursor-pointer ek-select-none ek-p-2 hover:ek-bg-primary hover:ek-text-white" data-language="Cameras">
                Cameras
              </li>
              <li class="ek-cursor-pointer ek-select-none ek-p-2 hover:ek-bg-primary hover:ek-text-white" data-language="IoT and Wireless">
                IoT and Wireless
              </li>
              <li class="ek-cursor-pointer ek-select-none ek-p-2 hover:ek-bg-primary hover:ek-text-white" data-language="Electronic Modules">
                Electronic Modules
              </li>
              <li class="ek-cursor-pointer ek-select-none ek-p-2 hover:ek-bg-primary hover:ek-text-white" data-language="Wires and Cables">
                Wires and Cables
              </li>
              <li class="ek-cursor-pointer ek-select-none ek-p-2 hover:ek-bg-primary hover:ek-text-white" data-language="Mechanical Parts and Workbench Tools">
                Mechanical Parts and Workbench Tools
              </li>
              <li class="ek-cursor-pointer ek-select-none ek-p-2 hover:ek-bg-primary hover:ek-text-white" data-language="Services">
                Services
              </li>
              <li class="ek-cursor-pointer ek-select-none ek-p-2 hover:ek-bg-primary hover:ek-text-white" data-language="Refurbished & Partial Workin">
                Refurbished & Partial Workin
              </li>
            </ul>
          </div>

          <!-- select end  -->
          <!-- input  -->
          <input type="text" placeholder="Search for Products" class="ek-flex-grow ek-border-none ek-px-4 ek-py-2 ek-outline-none" id="searchinput" />
          <!-- input end  -->
          <!-- button  -->
          <button class="ek-h-full ek-cursor-pointer ek-border-none ek-border-primary ek-bg-primary ek-px-4" id="searchbtn">
            <i class="ec ec-search ek-text-2xl ek-text-white"></i>
          </button>
          <!-- button end  -->
        </div>
      </div>
      <!-- center navbar end  -->

      <!-- left side icons  -->
      <div class="ek-flex ek-items-center ek-justify-between ek-text-primary">
        <div class="ek-relative lg:ek-hidden">
          <i class="ec ec-search ek-p-2 ek-text-2xl ek-text-primary hover:ek-text-secondary" id="floatingSearchButton"></i>
        </div>
        <div class="ek-absolute ek-left-0 ek-top-16 ek-z-[9999] ek-h-7 ek-w-full md:ek-top-20 ek-hidden lg:ek-hidden" id="floatingSearch">
          <form class="ek-flex ek-w-full ek-border-collapse ek-justify-center ek-px-5">
            <input type="text" class="ek-w-full ek-rounded-l-lg ek-border ek-border-primary ek-p-2 ek-outline-none focus:ek-border-secondary" placeholder="Search..." />
            <button class="ek-rounded-r-lg ek-border ek-border-primary ek-bg-primary ek-text-white ek-px-3 hover:ek-border-secondary hover:ek-bg-secondary">
              <i class="ec ec-search ek-text-2xl"></i>
            </button>
          </form>
        </div>

        <div class="ek-relative lg:ek-hidden" id="register-signup">
          <i class="ec ec-user ek-p-2 ek-text-2xl ek-text-primary hover:ek-text-secondary"></i>
        </div>
        <div class="ek-relative ek-text-primary hover:ek-text-secondary">
          <i class="ec ec-shopping-bag ek-p-2 ek-text-2xl ek-text-primary hover:ek-text-secondary"></i>
          <div class="ek-absolute ek-bottom-2 ek-right-0 ek-flex ek-h-4 ek-w-4 ek-items-center ek-justify-center ek-rounded-full ek-bg-primary ek-p-1 ek-text-sm ek-text-white hover:ek-bg-secondary">
            2
          </div>
        </div>
        <span class="ek-hidden ek-text-xl ek-font-semibold ek-text-primary hover:ek-text-secondary lg:ek-flex">₹1785.00</span>
      </div>
      <!-- left side icons end -->
    </div>
    <!-- category navbar  -->
    <div class="ek-hidden ek-pl-28 lg:ek-flex">
      <nav class="ek-relative ek-border-b-2 ek-border-gray-300 ek-bg-white ek-text-gray-900">
        <div class="container ek-mx-auto ek-flex ek-justify-between">
          
            <!-- mega Menu -->
            <?php
            // Include the menu generator PHP file
            include 'megaMenu.php';
            ?>
          <!-- mega Menu end -->
        </div>
      </nav>


    </div>

    <!-- category navbar end -->
  </nav>
  <!-- navbar end -->
</header>
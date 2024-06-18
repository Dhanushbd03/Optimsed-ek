<?php
$title = "Electronic Component";
// Array of sub-category data
$subCategoryData = [
  [
    "categoryName" => "Sensors",
    "image" => "assets/images/subCategory/electronicComponents/Sensor.png",
    "link" => "index.php?page=product",
  ],
  [
    "categoryName" => "Resistors",
    "image" => "assets/images/subCategory/electronicComponents/Diodes.jpg",
    "link" => "#",
  ],
  [
    "categoryName" => "Capacitors",
    "image" => "assets/images/subCategory/electronicComponents/Capacitors.jpg",
    "link" => "#",
  ],
  [
    "categoryName" => "Inductors",
    "image" => "assets/images/subCategory/electronicComponents/Inductors.jpg",
    "link" => "#",
  ],
  [
    "categoryName" => "Diodes",
    "image" => "assets/images/subCategory/electronicComponents/Diodes.jpg",
    "link" => "#",
  ],
  [
    "categoryName" => "Transistors",
    "image" => "assets/images/subCategory/electronicComponents/Transistors.jpg",
    "link" => "#",
  ],
  [
    "categoryName" => "Integrated Circuits",
    "image" => "assets/images/subCategory/electronicComponents/IntegratedCircuits.jpg",
    "link" => "#",
  ],
  [
    "categoryName" => "Relays",
    "image" => "assets/images/subCategory/electronicComponents/Relays.jpg",
    "link" => "#",
  ],
  [
    "categoryName" => "Connectors",
    "image" => "assets/images/subCategory/electronicComponents/Connectors.jpg",
    "link" => "#",
  ],
  [
    "categoryName" => "Switches",
    "image" => "assets/images/subCategory/electronicComponents/Switches.jpg",
    "link" => "#",
  ],
  [
    "categoryName" => "Microcontrollers",
    "image" => "assets/images/subCategory/electronicComponents/Microcontrollers.jpg",
    "link" => "#",
  ],
  [
    "categoryName" => "Batteries",
    "image" => "assets/images/subCategory/electronicComponents/Capacitors.jpg",
    "link" => "#",
  ],
  [
    "categoryName" => "Power Supplies",
    "image" => "assets/images/subCategory/electronicComponents/Capacitors.jpg",
    "link" => "#",
  ],
  [
    "categoryName" => "Oscillators",
    "image" => "assets/images/subCategory/electronicComponents/Capacitors.jpg",
    "link" => "#",
  ],
  [
    "categoryName" => "Transformers",
    "image" => "assets/images/subCategory/electronicComponents/Capacitors.jpg",
    "link" => "#",
  ],
];

?>
<?php
include '../template/head.php';
?>

<body class="scrollbar ek-font-sans">

  <!-- header -->
  <?php
  include '../template/header.php';
  ?>
  <!-- header end -->

  <!-- sidebar  -->
  <?php
  include '../template/sidebar.php';
  ?>
  <!-- sidebar end  -->

  <main>
    <!-- product subCategory -->
    <section class="lg:ek-px-24">
      <nav class="scrollbar ek-overflow-x-scroll ek-text-ellipsis ek-px-4 ek-py-4 lg:ek-pb-0">
        <div class="ek-container ek-mx-auto ek-flex ek-justify-start ek-gap-3">
          <a href="#" class="ek-text-nowrap ek-text-gray-600 hover:ek-text-gray-900">Home</a>
          <span class="ek-mx-2"><i class="fas fa-chevron-right ek-text-xs"></i></span>
          <a href="#" class="ek-text-nowrap ek-rounded-lg ek-bg-gray-200 ek-px-2 hover:ek-bg-gray-300 hover:ek-text-gray-900">Single Boards</a>
          <span class="ek-mx-2"><i class="fas fa-chevron-right ek-text-xs"></i></span>
          <a href="#" class="ek-text-nowrap ek-rounded-lg ek-bg-gray-200 ek-px-2 hover:ek-bg-gray-300 hover:ek-text-gray-900">Raspberry</a>
          <span class="ek-mx-2"><i class="fas fa-chevron-right ek-text-xs"></i></span>
          <span class="ek-text-nowrap ek-text-gray-900">Ufl/ Ipex/ Mhf1 Rf Connector</span>
        </div>
      </nav>
      <div class="ek-container ek-flex ek-justify-center ek-py-2 md:ek-mx-auto">
        <div class="ek-hidden md:ek-w-1/5 xl:ek-block">
          <div class="ek-border-text-gray-600 ek-h-[500px] ek-w-full ek-overflow-hidden ek-rounded-lg ek-border-2 ek-py-2" id="productCategory">
            <div class="ek-flex ek-flex-col">
              <h1 class="ek-border-b-2 ek-px-10 ek-py-2">
                Browse categories
              </h1>


              <ul class="ek-list-none ek-px-10">
                <?php
                $listItems = [
                  "Electronic Components",
                  "Semiconductor IC",
                  "Sensors",
                  "Communication modules",
                  "Development Boards",
                  "Motor, drivers & Actuators",
                  "3D printers and parts",
                  "Drones and accessories",
                  "Display",
                  "Speakers",
                  "Tiny Computers",
                  "DIY learning and Robo kits",
                  "Cameras",
                  "Electric vehicle parts",
                  "Wires , Connectors and cables",
                  "Batteries and Chargers",
                  "Solar panels and Accessories",
                  "Power Supply",
                  "Electronic tools",
                  "Robotics",
                  "Electronic Modules",
                  "Computer and accessories"
                ];
                foreach ($listItems as $item) : ?>
                  <li class="ek-border-b-2 ek-p-2"><?php echo htmlspecialchars($item); ?></li>
                <?php endforeach; ?>
              </ul>
            </div>
          </div>
          <div class="ek-flex ek-flex-col ek-rounded-lg">
            <img src="https://via.placeholder.com/400" alt="" class="ek-rounded-lg ek-p-2" />
            <img src="https://via.placeholder.com/400" alt="" class="ek-rounded-lg ek-p-2" />
          </div>
        </div>
        <div class="ek-w-full xl:ek-w-4/5">
          <div class="ek-flex ek-grow ek-flex-col sm:ek-self-start">
            <h1 class="ek-mx-auto ek-w-fit ek-border-b-2 ek-border-b-primary ek-py-2 ek-text-xl lg:ek-mx-10">
              <?php echo htmlspecialchars($title); ?> categories
            </h1>
            <div id="subCategory" class="animate__animated animate__fadeIn ek-relative ek-my-3 ek-flex ek-flex-wrap ek-justify-center ek-gap-y-2 ek-text-sm sm:ek-ml-10 lg:ek-ml-0 xl:ek-ml-10">
              <!-- CATEGORY ITEMS -->
              <?php foreach ($subCategoryData as $item) : ?>

                <a href="<?php echo htmlspecialchars($item['link']) ?>">
                  <div class="ek-flex ek-flex-col  ek-p-2 ek-rounded-lg  hover:ek-shadow-md hover:ek-shadow-gray-700 ek-min-w-[212px] ek-max-w-[212px] ek-min-h-[212px] ek-max-h-[212px] xl:ek-min-h-[250px] xl:ek-max-h-[250px] ek-text-ellipsis ek-transition-shadow ek-cursor-pointer ek-duration-100 ek-border-x-2 ek-border-gray-100 ">
                    <div class="ek-flex ek-justify-center ek-m-2">
                      <img src="<?php echo htmlspecialchars($item['image']); ?>" alt="" class="xl:ek-w-[200px] xl:ek-h-[180px] lg:ek-w-[180px] lg:ek-h-[150px] ek-rounded-lg " />
                    </div>
                    <div class="ek-p-2 ek-flex ek-justify-center">
                      <h1 class="ek-break-words ek-text-base ek-font-bold ek-w-full ek-text-center ">
                        <?php echo htmlspecialchars($item['categoryName']); ?>
                      </h1>
                    </div>
                  </div>
                </a>

              <?php endforeach; ?>
              <!-- CATEGORY ITEMS END -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- product subCategory end -->
  </main>
  <!-- registration   -->
  <?php include '../template/registration.php'; ?>
  <!-- registration end -->

  <!-- footer  -->
  <?php include '../template/footer.php'; ?>
  <!-- footer end  -->


  <!-- main content end -->
</body>

<?php include '../template/foot.php'; ?>
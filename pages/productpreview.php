
  <main>
    <!-- product preview -->
    <section class="lg:ek-px-24">
      <!-- NAVIGATION -->
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
      <!-- NAVIGATION end -->

      <div class=" ek-flex ek-justify-center ek-py-2 sm:ek-mx-auto">

        <!-- SIDE CATEGORY  -->
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
        <!-- SIDE CATEGORY end  -->

        <div class="ek-w-full xl:ek-w-4/5">

          <!-- PRODUCT VISUAL -->
          <div class="ek-flex ek-flex-wrap ek-items-center ek-justify-center md:ek-ml-16 md:ek-px-0 lg:ek-px-5">
            <div class="ek-relative ek-h-96 ek-w-full ek-px-4 md:ek-w-1/2" id="previewproductdiv">
              <img src="https://robu.in/wp-content/uploads/2019/12/92-768x768.jpg" alt="alt text" class="ek-absolute ek-left-0 ek-top-0 ek-h-3/4 ek-w-full ek-rounded-lg ek-object-contain" id="previewproductimage" />
              <div class="ek-absolute ek-bottom-0 ek-left-0 ek-flex ek-gap-2 ek-px-4 sm:ek-px-10 md:ek-px-4 lg:ek-mx-auto" id="optionimage">
                <img src="https://robu.in/wp-content/uploads/2019/12/kit-with-black-Grey-case.jpg" alt="Thumbnail 1" class="ek-h-20 ek-w-20 ek-rounded-lg ek-shadow-lg" />
                <img src="https://robu.in/wp-content/uploads/2019/12/91-100x100.jpg" alt="Thumbnail 2" class="ek-h-20 ek-w-20 ek-rounded-lg ek-shadow-lg" />
                <img src="https://robu.in/wp-content/uploads/2019/12/83-1.jpg" alt="Thumbnail 3" class="ek-h-20 ek-w-20 ek-rounded-lg ek-shadow-lg" />
                <img src="https://robu.in/wp-content/uploads/2019/12/91.jpg" alt="Thumbnail 4" class="ek-h-20 ek-w-20 ek-rounded-lg ek-shadow-lg" />
              </div>
            </div>
            <div class="ek-my-3 ek-w-full ek-px-4 sm:ek-px-10 md:ek-px-4 md:ek-w-1/2">
              <p class="ek-text-sm">Official Raspberry Pi Kits</p>
              <h1 class="ek-text-3xl ek-font-semibold">
                Raspberry Pi 4 Model B 4GB Starter Kit
              </h1>
              <div class="ek-mb-4 ek-flex ek-items-center">
                <div class="ek-mr-2 ek-text-yellow-500">
                  <?php for ($i = 0; $i < 5; $i++) : ?>
                    <svg class="ek-inline-block ek-h-5 ek-w-5 ek-fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12 .587l3.668 7.429 8.167 1.18-5.918 5.765 1.397 8.141-7.314-3.842-7.314 3.842 1.397-8.141-5.918-5.765 8.167-1.18z" />
                    </svg>
                  <?php endfor ?>
                </div>
                <span class="ek-text-gray-600">(3 customer reviews)</span>
              </div>
              <div class="ek-mb-4 ek-text-lg">
                <span class="ek-font-normal">Availability:
                  <span class="ek-text-green-800">In stock</span></span>
              </div>
              <ul class="ek-mb-4 ek-list-inside ek-list-disc ek-text-gray-700">
                <li>Frequency (MHz): 0 – 6.0 GHz</li>
                <li>Working Voltage (V): 200 V</li>
                <li>Insulation Resistance: >500 MOhm</li>
                <li>Contact Resistance: 10mA Max</li>
                <li>VSWR: < 1.4</li>
              </ul>

              <p class="ek-mb-4 ek-text-gray-600">SKU: 649557</p>
              <div class="ek-mb-4 ek-text-4xl ek-font-semibold ek-text-gray-900">
                ₹ 6,849.00
                <span class="ek-text-xl ek-text-gray-500 ek-line-through">₹ 7299.00</span>
              </div>

              <div class="ek-mb-4 ek-flex ek-flex-col ek-items-start ek-gap-4">
                <div class="ek-flex ek-items-center ek-gap-4">
                  <label for="quantity" class="ek-block ek-text-gray-700">Quantity</label>
                  <div class="ek-flex ek-items-center ek-space-x-4 ek-rounded-lg ek-bg-gray-100 ek-p-1">
                    <button id="decrease" class="ek-rounded ek-bg-gray-100 ek-px-2 ek-py-1 ek-font-bold ek-text-black focus:ek-outline-none focus:ek-ring-2 focus:ek-ring-primary">
                      -
                    </button>
                    <span id="counter" class="ek-text-sm ek-text-black">0</span>
                    <button id="increase" class="ek-rounded ek-bg-gray-100 ek-px-2 ek-py-1 ek-font-bold ek-text-black focus:ek-outline-none focus:ek-ring-2 focus:ek-ring-primary">
                      +
                    </button>
                  </div>
                </div>
                <div class="ek-flex ek-gap-4">
                  <button class="ek-rounded-lg ek-bg-primary ek-px-6 ek-py-3 ek-text-white ek-shadow hover:ek-bg-secondary">
                    Add to Cart
                  </button>
                  <button class="ek-rounded-lg ek-bg-primary ek-px-6 ek-py-3 ek-text-white ek-shadow hover:ek-bg-secondary">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- PRODUCT VISUAL -->

          <!-- PRODUCT DESCRIPTION -->
          <div class="ek-flex ek-grow ek-flex-col sm:ek-self-start">
            <div class="ek-flex ek-items-center ek-p-2 md:ek-py-0">
              <i class="fas fa-chevron-left ek-p-2 ek-text-sm" id="scroll-left"></i>
              <!-- tab category  -->
              <div class="section-scrollbar ek-overflow-x-scroll xl:ek-overflow-x-hidden" id="scroll-container">
                <ul class="ek-flex ek-min-w-max ek-justify-center ek-gap-5 ek-px-4 ek-text-xl ek-font-semibold" id="product-details">
                  <li class="ek-text-nowrap sm:ek-p-2">Description</li>
                  <li class="ek-text-nowrap sm:ek-p-2">Specification</li>
                  <li class="ek-text-nowrap sm:ek-p-2">Warranty</li>
                  <li class="ek-text-nowrap sm:ek-p-2">Reviews</li>
                  <li class="ek-text-nowrap sm:ek-p-2">Attachments</li>
                  <li class="ek-text-nowrap sm:ek-p-2">Videos</li>
                  <li class="ek-text-nowrap sm:ek-p-2">Discussion form</li>
                </ul>
              </div>
              <!-- tab category end  -->
              <i class="fas fa-chevron-right ek-p-2 ek-text-sm" id="scroll-right"></i>
            </div>
            <hr class="ek-border-1 ek-border-gray-100" />
0
            <div class="ek-px-2 md:ek-px-4 xl:ek-px-10" id="product-brief-details">
              <!-- Description -->
              <div class="animate__animated animate__fadeIn ek-relative ek-my-3 ek-hidden ek-min-h-80 ek-min-w-full ek-flex-wrap ek-justify-center ek-gap-0 ek-rounded-lg ek-border-2 ek-border-gray-200 ek-p-4 ek-text-sm">
                <p class="ek-py-4 ek-text-justify ek-italic ek-leading-loose ek-text-yellow-500">
                  Note:
                  <span class="ek-font-semibold">Raspberry Pi 4 case</span>
                  included in the package comes in two colors
                  <span class="ek-font-semibold">
                    Red-white or Black-Grey.</span>
                  And <span class="ek-font-semibold">power adapter</span> is
                  also available in two colors Black and White. We will ship
                  the color randomly according to the availability from the
                  supplier
                </p>
                <hr class="ek-border-1 ek-w-full ek-border-gray-200" />
                <p class="ek-py-4 ek-text-justify ek-leading-loose ek-text-gray-700">
                  An exclusive combo from electronickart.com that includes the necessary
                  products of Raspberry Pi 4 in the Pi family. It is the best
                  kit for a beginner looking to work on the Raspberry Pi 4
                  Model B family. Raspberry Pi 4 Model B is the latest product
                  in the popular Raspberry Pi range of computers. It offers a
                  ground-breaking increase in processor speed, multimedia
                  performance, memory, and connectivity compared to the
                  prior-generation Raspberry Pi 3 Model B+ while retaining
                  backward compatibility and similar power consumption. For
                  the end-user, Raspberry Pi 4 Model B provides desktop
                  performance comparable to entry-level x86 PC systems. Pi 4 B
                  is upgraded with Latest High-Performance Quad-Core 64-bit
                  Broadcom 2711, Cortex A72 processor clocked at 1.5GHz speed.
                  Which is designed to use 20% less power or offer 90% greater
                  performance than its old version. Hardware upgrade on Pi4
                  developed for faster performance not only the loading time
                  with all-new 4GB LPDDR4 SDRAM but also in connectivity with
                  Dual-band 2.4GHz and 5GHz, 802.11 b/g/n/ac wireless LAN and
                  PoE capability via a separate PoE HAT. In addition to it USB
                  3.0, improve the transfer speed by 10x than USB 2.0 to
                  provide you significantly faster true Gigabit internet
                  experience. We have made the combo of this essential product
                  needful for new upgraded hardware of your favorite Raspberry
                  Pi 4 and you can get it all in one go. So get it and
                  fast-track your journey with Latest Raspberry Pi 4 Model B.
                </p>
                <hr class="ek-border-1 ek-w-full ek-border-gray-200" />
                <img src="https://robu.in/wp-content/uploads/2019/12/Untitled4.jpg" alt="" class="ek-max-h-96" />
                <img src="https://robu.in/wp-content/uploads/2019/12/RPI-4-adapter-768x370.jpg" alt="" class="ek-max-h-96" />
                <img src="https://robu.in/wp-content/uploads/2019/12/pi-4-case.jpg" alt="" class="ek-max-h-96" />
                <img src="https://robu.in/wp-content/uploads/2019/12/Untitled1.jpg" alt="" class="ek-max-h-96" />
                <img src="https://robu.in/wp-content/uploads/2019/12/Untitled1.jpg" alt="" class="ek-max-h-96" />
                <img src="https://robu.in/wp-content/uploads/2019/08/Sandisk-SDSDHC-32GB-Class-10-Memory-Card-4.jpg" alt="" class="ek-max-h-96" />
                <hr class="ek-border-1 ek-w-full ek-border-gray-200" />

                <ul class="ek-py-1 ek-text-justify ek-leading-relaxed ek-text-gray-700">
                  <h5 class="ek-font-semibold">Package includes :</h5>
                  <li>The Raspberry Pi 4 Model B with 4GB RAM</li>
                  <li>USB type-C 15.3W power supply</li>
                  <li>Raspberry Pi 4 case</li>
                  <li>Micro HDMI to standard HDMI cable</li>
                  <li>Sandisk Micro SD 32GB Class 10 Memory Card</li>
                  <hr class="ek-border-1 ek-w-full ek-border-gray-200" />
                  <li class="ek-py-4 ek-text-justify ek-italic ek-leading-loose ek-text-yellow-500">
                    Note: Raspberry Pi 4 case included in the package comes in
                    two colors ie. Red-white or Black-Grey. And power adapter
                    is also available in two colors Black and White. We will
                    ship the color randomly according to the availability from
                    the supplier
                  </li>
                </ul>
              </div>
              <!-- Description end  -->
              <!-- Specification -->
              <div class="animate__animated animate__fadeIn ek-relative ek-my-3 ek-hidden ek-min-h-80 ek-min-w-full ek-flex-wrap ek-justify-center ek-gap-0 ek-rounded-lg ek-border-2 ek-border-gray-200 ek-p-4 ek-text-sm">
                <table class="ek-w-full ek-table-fixed ek-border-collapse ek-border ek-border-gray-200">
                  <thead>
                    <tr class="ek-border ek-border-gray-200">
                      <th class="ek-w-1/2 ek-border ek-border-gray-200 ek-px-2 ek-py-1 ek-text-start">
                        Key
                      </th>
                      <th class="ek-w-1/2 ek-border ek-border-gray-200 ek-px-2 ek-py-1 ek-text-start">
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="ek-w-1/2 ek-border ek-border-gray-200 ek-px-2 ek-py-1">
                        Brand
                      </td>
                      <td class="ek-w-1/2 ek-border ek-border-gray-200 ek-px-2 ek-py-1">
                        Raspberry Pi
                      </td>
                    </tr>
                    <tr>
                      <td class="ek-w-1/2 ek-border ek-border-gray-200 ek-px-2 ek-py-1">
                        Model
                      </td>
                      <td class="ek-w-1/2 ek-border ek-border-gray-200 ek-px-2 ek-py-1">
                        4 Model B
                      </td>
                    </tr>
                    <tr>
                      <td class="ek-w-1/2 ek-border ek-border-gray-200 ek-px-2 ek-py-1">
                        Processor
                      </td>
                      <td class="ek-w-1/2 ek-border ek-border-gray-200 ek-px-2 ek-py-1">
                        Quad-core Cortex-A72 (ARM v8) 64-bit SoC @ 1.5GHz
                      </td>
                    </tr>
                    <tr>
                      <td class="ek-w-1/2 ek-border ek-border-gray-200 ek-px-2 ek-py-1">
                        RAM
                      </td>
                      <td class="ek-w-1/2 ek-border ek-border-gray-200 ek-px-2 ek-py-1">
                        4GB LPDDR4-2400 SDRAM
                      </td>
                    </tr>
                    <tr>
                      <td class="ek-w-1/2 ek-border ek-border-gray-200 ek-px-2 ek-py-1">
                        Connectivity
                      </td>
                      <td class="ek-w-1/2 ek-border ek-border-gray-200 ek-px-2 ek-py-1">
                        2.4 GHz and 5.0 GHz IEEE 802.11b/g/n/ac wireless LAN,
                        Bluetooth 5.0, BLE
                      </td>
                    </tr>
                    <tr>
                      <td class="ek-w-1/2 ek-border ek-border-gray-200 ek-px-2 ek-py-1">
                        GPIO
                      </td>
                      <td class="ek-w-1/2 ek-border ek-border-gray-200 ek-px-2 ek-py-1">
                        40-pin GPIO header
                      </td>
                    </tr>
                    <tr>
                      <td class="ek-w-1/2 ek-border ek-border-gray-200 ek-px-2 ek-py-1">
                        Video & Sound
                      </td>
                      <td class="ek-w-1/2 ek-border ek-border-gray-200 ek-px-2 ek-py-1">
                        2 × micro HDMI ports (up to 4kp60 supported), 2-lane
                        MIPI DSI display port, 2-lane MIPI CSI camera port, 4
                        pole stereo audio and composite video port
                      </td>
                    </tr>
                    <tr>
                      <td class="ek-w-1/2 ek-border ek-border-gray-200 ek-px-2 ek-py-1">
                        USB
                      </td>
                      <td class="ek-w-1/2 ek-border ek-border-gray-200 ek-px-2 ek-py-1">
                        2 × USB 3.0 ports, 2 × USB 2.0 ports
                      </td>
                    </tr>
                    <tr>
                      <td class="ek-w-1/2 ek-border ek-border-gray-200 ek-px-2 ek-py-1">
                        Power
                      </td>
                      <td class="ek-w-1/2 ek-border ek-border-gray-200 ek-px-2 ek-py-1">
                        5V DC via USB-C connector (minimum 3A*)
                      </td>
                    </tr>
                    <tr>
                      <td class="ek-w-1/2 ek-border ek-border-gray-200 ek-px-2 ek-py-1">
                        Storage
                      </td>
                      <td class="ek-w-1/2 ek-border ek-border-gray-200 ek-px-2 ek-py-1">
                        MicroSD card slot for operating system and data
                      </td>
                    </tr>
                    <tr>
                      <td class="ek-w-1/2 ek-border ek-border-gray-200 ek-px-2 ek-py-1">
                        Operating Temperature
                      </td>
                      <td class="ek-w-1/2 ek-border ek-border-gray-200 ek-px-2 ek-py-1">
                        0 – 50 degrees C ambient
                      </td>
                    </tr>
                    <tr>
                      <td class="ek-w-1/2 ek-border ek-border-gray-200 ek-px-2 ek-py-1">
                        Dimensions
                      </td>
                      <td class="ek-w-1/2 ek-border ek-border-gray-200 ek-px-2 ek-py-1">
                        85.6mm × 56.5mm × 17mm
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- specification end -->
              <!-- Warranty -->
              <div class="animate__animated animate__fadeIn ek-relative ek-my-3 ek-hidden ek-min-w-full ek-flex-wrap ek-gap-0 ek-rounded-lg ek-border-2 ek-border-gray-200 ek-p-4 ek-text-sm">
                <p class="ek-py-4 ek-leading-loose ek-text-gray-700">
                  6 Months Warranty
                </p>
                <hr class="ek-border-1 ek-w-full ek-border-gray-200" />
                <p class="ek-py-4 ek-text-justify ek-leading-loose ek-text-gray-700">
                  This item is covered with a supplier warranty of 6 months
                  from the time of delivery against manufacturing defects
                  only. This is a quality product from the original
                  manufacturer. Only manufacturing defects are covered under
                  this warranty. Replacement will be done against
                  manufacturing defects.
                </p>
                <hr class="ek-border-1 ek-w-full ek-border-gray-200" />
                <p class="ek-pb-4 ek-text-justify ek-leading-loose ek-text-gray-700">
                  If the product is subject to misuse, tampering, static
                  discharge, accident, water or fire damage, use of chemicals
                  & soldered or altered in any way.
                </p>
              </div>
              <!-- Warranty end -->
              <!-- Reviews -->
              <div class="animate__animated animate__fadeIn ek-relative ek-my-3 ek-hidden ek-min-h-80 ek-min-w-full ek-flex-wrap ek-gap-0 ek-rounded-lg ek-border-2 ek-border-gray-200 ek-p-4 ek-text-sm">
                <div class="ek-flex ek-w-full ek-flex-col sm:ek-flex-row">
                  <div class="ek-flex ek-flex-col ek-gap-5 ek-p-5 ek-text-gray-700 sm:ek-w-1/2">
                    <h2 class="ek-text-xl">Based on 122 reviews</h2>

                    <h1 class="ek-flex ek-flex-col">
                      <span class="ek-text-3xl ek-font-bold">4.9</span>overall
                    </h1>
                    <!-- 5star  -->
                    <div class="ek-flex ek-items-center">
                      <div class="ek-mr-7 ek-flex ek-gap-1">
                        <i class="fa-solid fa-star ek-text-primary"></i>
                        <i class="fa-solid fa-star ek-text-primary"></i>
                        <i class="fa-solid fa-star ek-text-primary"></i>
                        <i class="fa-solid fa-star ek-text-primary"></i>
                        <i class="fa-solid fa-star ek-text-primary"></i>
                      </div>
                      <div class="ek-mr-3 ek-h-2 ek-w-40 ek-rounded-full ek-bg-gray-100">
                        <div class="ek-h-2 ek-rounded-full ek-bg-gray-300"></div>
                      </div>
                      <p>111</p>
                    </div>

                    <!-- 5star end  -->
                    <!-- 4star  -->
                    <div class="ek-flex ek-items-center">
                      <div class="ek-mr-7 ek-flex ek-gap-1">
                        <i class="fa-solid fa-star ek-text-primary"></i>
                        <i class="fa-solid fa-star ek-text-primary"></i>
                        <i class="fa-solid fa-star ek-text-primary"></i>
                        <i class="fa-solid fa-star ek-text-primary"></i>
                        <i class="fa-regular fa-star ek-text-gray-200"></i>
                      </div>
                      <div class="ek-mr-3 ek-h-2 ek-w-40 ek-rounded-full ek-bg-gray-100">
                        <div class="ek-h-2 ek-rounded-full ek-bg-gray-300"></div>
                      </div>
                      <p>1</p>
                    </div>

                    <!-- 4star end  -->
                    <!-- 3star  -->
                    <div class="ek-flex ek-items-center">
                      <div class="ek-mr-7 ek-flex ek-gap-1">
                        <i class="fa-solid fa-star ek-text-primary"></i>
                        <i class="fa-solid fa-star ek-text-primary"></i>
                        <i class="fa-solid fa-star ek-text-primary"></i>
                        <i class="fa-regular fa-star ek-text-gray-200"></i><i class="fa-regular fa-star ek-text-gray-200"></i>
                      </div>
                      <div class="ek-mr-3 ek-h-2 ek-w-40 ek-rounded-full ek-bg-gray-100">
                        <div class="ek-h-2 ek-rounded-full ek-bg-gray-300"></div>
                      </div>
                      <p>4</p>
                    </div>
                    <!-- 3star end  -->
                    <!-- 2star  -->
                    <div class="ek-flex ek-items-center">
                      <div class="ek-mr-7 ek-flex ek-gap-1">
                        <i class="fa-solid fa-star ek-text-primary"></i>
                        <i class="fa-solid fa-star ek-text-primary"></i>

                        <i class="fa-regular fa-star ek-text-gray-200"></i>
                        <i class="fa-regular fa-star ek-text-gray-200"></i><i class="fa-regular fa-star ek-text-gray-200"></i>
                      </div>
                      <div class="ek-mr-3 ek-h-2 ek-w-40 ek-rounded-full ek-bg-gray-100">
                        <div class="ek-h-2 ek-rounded-full ek-bg-gray-300"></div>
                      </div>
                      <p>5</p>
                    </div>
                    <!-- 2star end  -->
                    <!-- 1star  -->
                    <div class="ek-flex ek-items-center">
                      <div class="ek-mr-7 ek-flex ek-gap-1">
                        <i class="fa-solid fa-star ek-text-primary"></i>

                        <i class="fa-regular fa-star ek-text-gray-200"></i>
                        <i class="fa-regular fa-star ek-text-gray-200"></i>
                        <i class="fa-regular fa-star ek-text-gray-200"></i><i class="fa-regular fa-star ek-text-gray-200"></i>
                      </div>
                      <div class="ek-mr-3 ek-h-2 ek-w-40 ek-rounded-full ek-bg-gray-100">
                        <div class="ek-h-2 ek-w-5 ek-rounded-full ek-bg-gray-300"></div>
                      </div>
                      <p>1</p>
                    </div>
                    <!-- 1star end  -->
                  </div>
                  <div class="ek-flex ek-flex-col ek-gap-5 ek-py-5 ek-text-base ek-text-gray-700 lg:ek-w-1/2">
                    <h1 class="ek-text-xl">Add a review</h1>
                    <form class="ek-flex ek-flex-col ek-justify-center ek-gap-10">
                      <div class="ek-flex ek-items-center ek-gap-5">
                        <label class="ek-flex ek-w-1/2 ek-justify-between ek-gap-5 ek-text-nowrap lg:ek-w-1/4">Your Rating <span>:</span></label>
                        <div class="ek-flex ek-w-1/2 ek-gap-1 lg:ek-w-3/4">
                          <i class="fa-regular fa-star ek-text-gray-200"></i>
                          <i class="fa-regular fa-star ek-text-gray-200"></i>
                          <i class="fa-regular fa-star ek-text-gray-200"></i>
                          <i class="fa-regular fa-star ek-text-gray-200"></i>
                          <i class="fa-regular fa-star ek-text-gray-200"></i>
                        </div>
                      </div>

                      <div class="ek-flex ek-items-center ek-gap-5">
                        <label for="review" class="ek-flex ek-w-1/2 ek-justify-between ek-gap-5 ek-text-nowrap lg:ek-w-1/4">Your Review <span>:</span></label>
                        <textarea name="review" id="review" class="ek-w-1/2 ek-rounded-lg ek-border ek-border-gray-200 ek-p-2 ek-text-sm focus:ek-outline-1 focus:ek-outline-primary"></textarea>
                      </div>

                      <div class="ek-flex ek-items-center ek-gap-5">
                        <label for="name" class="ek-flex ek-w-1/2 ek-justify-between ek-gap-5 ek-text-nowrap lg:ek-w-1/4">Name* <span>:</span></label>
                        <input name="name" id="name" class="ek-w-1/2 ek-rounded-lg ek-border ek-border-gray-200 ek-p-2 ek-text-sm focus:ek-outline-1 focus:ek-outline-primary" />
                      </div>

                      <div class="ek-flex ek-items-center ek-gap-5">
                        <label for="email" class="ek-flex ek-w-1/2 ek-justify-between ek-gap-5 ek-text-nowrap lg:ek-w-1/4">Email*<span>:</span></label>
                        <input name="email" id="email" class="ek-w-1/2 ek-rounded-lg ek-border ek-border-gray-200 ek-p-2 ek-text-sm focus:ek-outline-1 focus:ek-outline-primary" required />
                      </div>

                      <button type="submit" class="ek-self-start ek-rounded-lg ek-bg-primary ek-px-4 ek-py-2 ek-text-white hover:ek-bg-secondary">
                        Add Review
                      </button>
                    </form>
                  </div>
                </div>
                <div class="ek-flex ek-w-full ek-flex-col ek-gap-5 ek-text-gray-700">
                  <div class="ek-flex ek-flex-col ek-gap-5">
                    <div class="ek-mr-7 ek-flex ek-gap-1">
                      <i class="fa-solid fa-star ek-text-primary"></i>
                      <i class="fa-solid fa-star ek-text-primary"></i>
                      <i class="fa-solid fa-star ek-text-primary"></i>
                      <i class="fa-solid fa-star ek-text-primary"></i>
                      <i class="fa-solid fa-star ek-text-primary"></i>
                    </div>
                    <p>
                      Original, good quality, fast and secure delivery. First
                      I was about purchasing from electronickart.com, but
                      after some research, I finally went for it and my
                      decision was ?. You can buy from them without any
                      problem.
                    </p>
                    <p class="ek-font-semibold">
                      anuperumpally -
                      <span class="ek-font-normal">June 21, 2024</span>
                    </p>
                  </div>
                  <hr />
                  <div class="ek-flex ek-flex-col ek-gap-5">
                    <div class="ek-mr-7 ek-flex ek-gap-1">
                      <i class="fa-solid fa-star ek-text-primary"></i>
                      <i class="fa-solid fa-star ek-text-primary"></i>
                      <i class="fa-solid fa-star ek-text-primary"></i>
                      <i class="fa-solid fa-star ek-text-primary"></i>
                      <i class="fa-solid fa-star ek-text-primary"></i>
                    </div>
                    <p>
                      Original, good quality, fast and secure delivery. First
                      I was about purchasing from electronickart.com, but
                      after some research, I finally went for it and my
                      decision was ?. You can buy from them without any
                      problem.
                    </p>
                    <p class="ek-font-semibold">
                      anuperumpally -
                      <span class="ek-font-normal">June 21, 2024</span>
                    </p>
                  </div>
                </div>
              </div>
              <!-- Reviews end  -->
              <!-- Attachments -->
              <div class="animate__animated animate__fadeIn ek-relative ek-my-3 ek-hidden ek-min-w-full ek-flex-wrap ek-justify-center ek-gap-5 ek-rounded-lg ek-border-2 ek-border-gray-200 ek-px-4 ek-py-8 ek-text-sm">
                <div class="ek-flex ek-w-full ek-justify-between">
                  <h3 class="">DATASHEET OF USB TYPE-C POWER SUPPLY</h3>
                  <button class="ek-rounded-lg ek-bg-gray-200 ek-p-2">
                    <a href="assets/pdf/Raspberry-Pi-4-Adapter.pdf" target="_blank"><i class="fa-solid fa-download ek-px-1"></i>Download</a>
                  </button>
                </div>
                <hr class="ek-border-1 ek-w-full ek-border-gray-200" />
                <div class="ek-flex ek-w-full ek-justify-between">
                  <h3 class="">DATASHEET OF RASPBERRY PI4 MODEL B</h3>
                  <button class="ek-rounded-lg ek-bg-gray-200 ek-p-2">
                    <a href="assets/pdf/Raspberry-Pi-4-Adapter.pdf" target="_blank"><i class="fa-solid fa-download ek-px-1"></i>Download</a>
                  </button>
                </div>
              </div>
              <!-- Attachments end  -->
              <!-- Videos -->
              <div class="animate__animated animate__fadeIn ek-relative ek-my-3 ek-hidden ek-min-h-80 ek-min-w-full ek-flex-col ek-justify-center ek-gap-0 ek-rounded-lg ek-border-2 ek-border-gray-200 ek-p-4 ek-text-sm lg:ek-flex-row">
                <div class="ek-flex ek-h-96 ek-flex-col ek-gap-5 ek-py-1 ek-text-gray-700  lg:ek-w-1/2 lg:ek-py-5 lg:ek-pl-5">
                  <iframe class="ek-h-full" src="https://www.youtube.com/embed/TEuVU6id_mI?si=nYpRo91uICb8SKNZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div class="ek-flex ek-h-96 ek-flex-col ek-gap-5 ek-py-1 ek-text-gray-700  lg:ek-w-1/2 lg:ek-py-5 lg:ek-pr-5">
                  <iframe class="ek-h-full" src="https://www.youtube.com/embed/YpNv_7YGScE?si=oHEWO5Gdt83B0fRl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
              </div>
              <!-- Videos end -->
              <!-- Discussion form  -->
              <div class="animate__animated animate__fadeIn ek-relative ek-my-3 ek-hidden ek-min-h-80 ek-min-w-full ek-flex-wrap ek-justify-center ek-gap-0 ek-rounded-lg ek-border-2 ek-border-gray-200 ek-p-4 ek-text-sm">
                <section class="ek-mx-auto ek-w-full ek-rounded-lg ek-bg-white ek-p-6 ek-shadow-md">
                  <h1 class="ek-mb-4 ek-text-2xl ek-font-bold">
                    Questions and answers of the customers
                  </h1>

                  <!-- Input form for asking a question -->
                  <form class="ek-mb-6">
                    <div class="ek-mb-4">
                      <label class="ek-mb-2 ek-block ek-font-bold ek-text-gray-700" for="question">Ask a Question</label>
                      <input class="ek-w-full ek-rounded ek-border ek-px-3 ek-py-2 focus:ek-outline-primary" id="question" type="text" placeholder="Type your question here..." />
                    </div>
                    <div class="ek-mb-4">
                      <label class="ek-mb-2 ek-block ek-font-bold ek-text-gray-700" for="username">Your Name</label>
                      <input class="ek-w-full ek-rounded ek-border ek-px-3 ek-py-2 focus:ek-outline-primary" id="username" type="text" placeholder="Enter your name..." />
                    </div>
                    <button class="ek-rounded ek-bg-primary ek-px-3 ek-py-2 ek-text-white hover:ek-bg-secondary" type="submit">
                      Submit Question
                    </button>
                  </form>

                  <!-- First question and answer -->
                  <div class="ek-mb-6">
                    <div class="vote-container ek-mb-2 ek-flex ek-flex-col ek-items-start md:ek-flex-row">
                      <div class="ek-mb-2 ek-flex-shrink-0 ek-text-center ek-text-sm ek-font-medium ek-text-gray-600 md:ek-mb-0 md:ek-mr-4">
                        <button class="upvote vote-button ek-text-gray-500">
                          ▲
                        </button>
                        <div class="vote-count">0</div>
                        <button class="downvote vote-button ek-text-gray-500">
                          ▼
                        </button>
                      </div>
                      <div class="ek-flex-grow">
                        <div class="ek-flex ek-font-medium">
                          <div class="ek-mx-1 ek-h-fit ek-rounded-lg ek-bg-gray-100 ek-px-1 ek-font-semibold">
                            Q
                          </div>
                          Can you print in transparent ABS ? (FDM)
                        </div>
                        <div class="ek-m-2 ek-text-[12px] ek-text-gray-500">
                          Asked by hrithik.singla254 on January 9, 2024 7:43
                          pm
                        </div>
                      </div>
                      <button class="ek-ml-auto ek-mt-2 ek-rounded ek-bg-gray-200 ek-px-3 ek-py-1 ek-text-gray-800 md:ek-mt-0">
                        answer now
                      </button>
                    </div>
                    <div class="ek-mt-2 ek-pl-8 ek-text-gray-700">
                      <div class="ek-flex">
                        <div class="ek-mx-1 ek-h-fit ek-rounded-lg ek-bg-gray-100 ek-px-1 ek-font-semibold">
                          A
                        </div>
                        Please contact our customer support
                      </div>
                    </div>
                    <!-- Input form for replying -->
                    <form class="ek-mt-2 ek-pl-8">
                      <div class="ek-mb-4">
                        <label class="ek-mb-2 ek-block ek-font-bold ek-text-gray-700" for="reply1">Your Reply</label>
                        <input class="ek-w-full ek-rounded-lg ek-border ek-px-3 ek-py-2 focus:ek-outline-primary" id="reply1" type="text" placeholder="Type your reply here..." />
                      </div>
                      <button class="ek-rounded ek-bg-primary ek-px-3 ek-py-2 ek-text-white hover:ek-bg-secondary" type="submit">
                        Submit Reply
                      </button>
                    </form>
                  </div>
                </section>
              </div>
              <!-- Discussion form end  -->
            </div>
          </div>
          <!-- PRODUCT DESCRIPTION end -->

          <!-- RELATED PRODUCTS  -->
          <div class="ek-flex ek-grow ek-flex-col sm:ek-self-start">
            <h1 class="ek-mx-10 ek-w-fit ek-border-b-2 ek-border-b-primary ek-py-2 ek-text-xl">
              Related Products
            </h1>
            <div id="related-products" class="animate__animated animate__fadeIn ek-relative ek-my-3 ek-flex ek-flex-wrap ek-justify-center ek-gap-0 ek-text-sm sm:ek-mx-10 2xl:ek-justify-start">
              <?php
              $relatedProductsData = [
                [
                  "title" => "single boards",
                  "productName" => "12V DC Motor with Gearbox",
                  "price" => "1000.00",
                  "image" => "assets/images/products/shopping (1).webp",
                ],
                [
                  "title" => "development kits",
                  "productName" => "Arduino Uno R3",
                  "price" => "2500.99",
                  "image" => "assets/images/products/shopping (2).webp",
                ],
                [
                  "title" => "sensors",
                  "productName" => "HC-SR04 Ultrasonic Sensor",
                  "price" => "2000.49",
                  "image" => "assets/images/products/shopping (3).webp",
                ],
                [
                  "title" => "modules",
                  "productName" => "ESP8266 Wi-Fi Module",
                  "price" => "3999.99",
                  "image" => "assets/images/products/shopping (4).webp",
                ],
              ];

              foreach ($relatedProductsData as $product) : ?>
                <div class="ek-flex ek-min-w-[12rem] ek-max-w-[12rem] ek-flex-col ek-justify-between ek-rounded-lg ek-border ek-border-gray-100 ek-p-5 ek-shadow-black hover:ek-shadow-2xl sm:ek-min-w-[10rem] sm:ek-max-w-[10rem] lg:ek-min-w-[11rem] lg:ek-max-w-[11rem] xl:ek-min-w-[14rem] xl:ek-max-w-[14rem] 2xl:ek-min-w-[14rem] 2xl:ek-max-w-[14rem] tiny:ek-min-w-[11rem] tiny:ek-max-w-[11rem]">
                  <p class="ek-mb-2 ek-text-[12px] ek-text-gray-700"><?php echo $product["title"] ?> </p>
                  <h5 class="ek-mb-4 ek-line-clamp-2 ek-font-semibold"><?php echo $product["productName"] ?></h5>
                  <div class="ek-mb-4 ek-flex ek-items-center ek-justify-center">
                    <img src="<?php echo $product["image"] ?>" alt="<?php echo $product["productName"] ?>" class="ek-max-h-[135px] ek-min-h-[135px] ek-w-full ek-object-contain xl:ek-max-h-[200px] xl:ek-min-h-[200px] xl:ek-min-w-[200px] xl:ek-max-w-[200px]" />
                  </div>
                  <div class="ek-flex ek-items-center ek-gap-2 ek-justify-between">
                    <p class="ek-text-xl ek-font-bold">₹<?php echo $product["price"]; ?> </p>
                    <div class="ek-rounded-full ek-bg-primary ek-px-3 ek-py-2 ">
                      <i class="ec ec-add-to-cart sm:ek-text-sm ek-text-xl ek-text-white"></i>
                    </div>
                  </div>
                </div>
              <?php endforeach; ?>

            </div>
          </div>
          <!-- RELATED PRODUCTS end  -->

        </div>
      </div>
    </section>
    <!-- product preview end -->

    <!-- advertise  -->
    <section class="ek-mx-5 ek-mb-5 ek-flex ek-flex-col ek-gap-2 sm:ek-mx-20 md:ek-flex-row">
      <!-- First Slider -->
      <div class="ek-flex ek-w-full ek-items-center ek-justify-center sm:ek-mx-auto sm:ek-w-1/2">
        <div class="ek-relative ek-w-full ek-overflow-hidden ek-h-[320px]" id="advertisement1"></div>
      </div>

      <!-- Second Slider -->
      <div class="ek-flex ek-w-full ek-items-center ek-justify-center sm:ek-mx-auto sm:ek-w-1/2">
        <div class="ek-relative ek-w-full ek-overflow-hidden ek-h-[320px]" id="advertisement2"></div>
      </div>
    </section>
    <!-- advertise end  -->

  </main>


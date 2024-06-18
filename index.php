<?php
include 'template/head.php';
?>

<body class="scrollbar ek-font-sans">

  <!-- header -->
  <?php
  include 'template/header.php';
  ?>
  <!-- header end -->

  <!-- sidebar  -->
  <?php
  include 'template/sidebar.php';
  ?>
  <!-- sidebar end  -->


    <!-- main content -->
    <?php
    $page = $_GET['page'] ?? 'home'; 

    switch ($page) {
        case 'product':
            include 'pages/productpreview.php';
            break;
        case 'productsList':
            include 'pages/productsList.php';
            break;
        case 'subcategory':
            include 'pages/subCategory.php';
            break;
        default:
            include 'pages/home.php';
            break;
    }
    ?>
    <!-- main content end -->

  <!-- registration   -->
  <?php include 'template/registration.php'; ?>
  <!-- registration end -->

  <!-- footer  -->
  <?php include 'template/footer.php'; ?>
  <!-- footer end  -->


  <!-- main content end -->
</body>

<?php include 'template/foot.php'; ?>
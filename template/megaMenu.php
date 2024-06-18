<?php
// Data structure in PHP
$data = [
  [
    "title" => "Home",
    "url" => "#",
  ],
  [
    "title" => "Computer Accessories",
    "url" => "#",
    "subsections" => [
      [
        "heading" => "Heading 1",
        "subLinks" => [
          ["title" => "Category One Sublink", "url" => "#"],
          ["title" => "Category One Sublink", "url" => "#"],
          ["title" => "Category One Sublink", "url" => "#"],
          ["title" => "Category One Sublink", "url" => "#"],
          ["title" => "Category One Sublink", "url" => "#"],
        ],
      ],
      [
        "heading" => "Heading 2",
        "subLinks" => [
          ["title" => "Category Two Sublink", "url" => "#"],
          ["title" => "Category Two Sublink", "url" => "#"],
          ["title" => "Category Two Sublink", "url" => "#"],
          ["title" => "Category Two Sublink", "url" => "#"],
          ["title" => "Category Two Sublink", "url" => "#"],
        ],
      ],
      [
        "heading" => "Heading 3",
        "subLinks" => [
          ["title" => "Category Three Sublink", "url" => "#"],
          ["title" => "Category Three Sublink", "url" => "#"],
          ["title" => "Category Three Sublink", "url" => "#"],
          ["title" => "Category Three Sublink", "url" => "#"],
          ["title" => "Category Three Sublink", "url" => "#"],
        ],
      ],
    ],
  ],
  ["title" => "3D Printers and parts", "url" => "#"],
  ["title" => "Development Boards", "url" => "#"],
  ["title" => "Electric Vehicle parts", "url" => "#"],
  [
    "title" => "Development Boards",
    "url" => "#",
    "subsections" => [
      [
        "heading" => "Heading 1",
        "subLinks" => [
          ["title" => "Category One Sublink", "url" => "#"],
          ["title" => "Category One Sublink", "url" => "#"],
          ["title" => "Category One Sublink", "url" => "#"],
          ["title" => "Category One Sublink", "url" => "#"],
          ["title" => "Category One Sublink", "url" => "#"],
        ],
      ],
      [
        "heading" => "Heading 2",
        "subLinks" => [
          ["title" => "Category Two Sublink", "url" => "#"],
          ["title" => "Category Two Sublink", "url" => "#"],
          ["title" => "Category Two Sublink", "url" => "#"],
          ["title" => "Category Two Sublink", "url" => "#"],
          ["title" => "Category Two Sublink", "url" => "#"],
        ],
      ],
      [
        "heading" => "Heading 3",
        "subLinks" => [
          ["title" => "Category Three Sublink", "url" => "#"],
          ["title" => "Category Three Sublink", "url" => "#"],
          ["title" => "Category Three Sublink", "url" => "#"],
          ["title" => "Category Three Sublink", "url" => "#"],
          ["title" => "Category Three Sublink", "url" => "#"],
        ],
      ],
    ],
  ],
];

// Function to create subsection HTML
function createSubsection($heading, $links) {
  $subSection = '
      <ul class="ek-px-4 ek-w-full sm:ek-w-1/2 lg:ek-w-1/4 ek-border-gray-300 ek-border-b sm:ek-border-r lg:ek-border-b-0 ek-pb-6 ek-pt-6 lg:ek-pt-3">
        <h3 class="ek-font-bold ek-text-xl ek-text-black text-bold ek-mb-2">' . $heading . '</h3>';
  foreach ($links as $link) {
    $subSection .= '
        <li>
          <a href="' . $link["url"] . '" class="ek-block ek-p-3 hover:ek-bg-primary ek-text-gray-700 hover:ek-text-white">' . $link["title"] . '</a>
        </li>';
  }
  $subSection .= '</ul>';
  return $subSection;
}

// Generating menu HTML
$megaMenuHtml = '';
foreach ($data as $item) {
  $subSections = "";
  if (isset($item["subsections"]) && count($item["subsections"]) > 0) {
    foreach ($item["subsections"] as $subsection) {
      $subSections .= createSubsection($subsection["heading"], $subsection["subLinks"]);
    }

    $megaMenuHtml .= '
      <li class="hoverable hover:ek-bg-white ek-z-[60] hover:ek-text-white">
        <a href="' . $item["url"] . '" class="ek-relative ek-block ek-px-4 ek-py-6 ek-text-sm ek-font-bold hover:ek-bg-gray-100 ek-text-primary ek-rounded-t-lg lg:ek-p-4 lg:ek-text-base">' . $item["title"] . ' <i class="fas fa-chevron-down ek-text-xs ek-text-gray-700"></i></a>
        <div class="mega-menu ek-mb-16 ek-bg-white ek-p-6 ek-shadow-xl ek-shadow-gray-500 sm:ek-mb-0">
          <div class="container ek-mx-auto ek-w-full ek-flex ek-flex-wrap ek-justify-between ek-mx-2">
            ' . $subSections . '
            <ul class="ek-px-4 ek-w-full sm:ek-w-1/2 lg:ek-w-1/4 ek-border-gray-600 ek-pb-6 ek-pt-6 lg:ek-pt-3">
              <h3 class="ek-font-bold ek-text-xl ek-text-gray-700 text-bold ek-mb-2"></h3>
              <li class="ek-pt-3">
                <img src="https://placehold.it/205x172">
              </li>
            </ul>
          </div>
        </div>
      </li>
    ';
  } else {
    $simpleMenuHtml = '
      <li class="hoverable hover:ek-bg-white ek-z-[60] hover:ek-text-white">
        <a href="' . $item["url"] . '" class="ek-relative ek-block ek-px-4 ek-py-6 ek-text-sm ek-font-bold hover:ek-bg-gray-100 ek-text-primary ek-rounded-t-lg lg:ek-p-4 lg:ek-text-base">' . $item["title"] . '</a>
      </li>
    ';

    $megaMenuHtml .= $simpleMenuHtml;
  }
}

// Output the mega menu
echo '<ul  class="ek-flex" id="mega-menu">' . $megaMenuHtml . '</ul>';
?>

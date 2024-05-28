const primary = "#3D3F82";
const secondary = "#D5202E";

// category in navbar
const searchdiv = document.getElementById("searchdiv");
const searchinput = document.getElementById("searchinput");
const searchbtn = document.getElementById("searchbtn");
const searchcategory = document.getElementById("searchcategory");

searchdiv.addEventListener("mouseenter", function() {
    searchbtn.style.backgroundColor = secondary;
    searchdiv.style.borderColor = secondary;
});

searchdiv.addEventListener("mouseleave", function() {
    if (searchinput === document.activeElement || searchcategory === document.activeElement) {
        return;
    }
    searchbtn.style.backgroundColor = primary;
    searchdiv.style.borderColor = primary;
});

searchinput.addEventListener("blur", function() {
    setTimeout(() => {
        if (searchcategory === document.activeElement) return;
        searchbtn.style.backgroundColor = primary;
        searchdiv.style.borderColor = primary;
    }, 0);
});

searchcategory.addEventListener("blur", function() {
    setTimeout(() => {
        if (searchinput === document.activeElement) return;
        searchbtn.style.backgroundColor = primary;
        searchdiv.style.borderColor = primary;
    }, 0);
});
// category in navbar end
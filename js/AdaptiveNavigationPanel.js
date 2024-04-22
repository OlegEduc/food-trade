function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// function displayContacts() {
//   //const dropdownCalls = document.querySelector('.dropdown-calls')
//   const dropdownCallsContent = document.querySelector(
//     ".dropdown-content-contacts"
//   );
//   //dropdownCalls.classList.toggle('active');
//   dropdownCallsContent.classList.toggle("active");
// }

// // для мобильных устройств
// const dropdown = document.querySelector(".footer .dropdown");
// const search = document.querySelector(".search");

// const btnSearchClear = document.querySelector("#btn-search-clear");
const btnCategory = document.querySelector("#btn-category");

// const footer = document.querySelector(".footer");
// if (window.location.pathname === "/index.html") {
//   if (window.innerWidth > 600) {
//     btnSearchClear.innerText = "Очистити";
//     search.style.display = "flex";
//   }
// }

function hsddenVisibleElem(el) {
  if (el === null) {
    return;
  }
  el.classList.toggle("hidedElement");
}

// обработка клика по кнопке категорий товаров
const sidebarDropdown = document.querySelector(".sidebar-dropdown");
sidebarDropdown.addEventListener("click", function () {
  console.log("click on sidebar-dropdown");
  hsddenVisibleElem(sidebarDropdown);
});

if (document.querySelector(".footer")) {
  btnCategory.addEventListener("click", function () {
    hsddenVisibleElem(sidebarDropdown);
  });
} // /обработка клика по кнопке категорий товаров

// обработка клика по кнопке поиска <600px
const btnSearch = document.querySelector("#btn-search");
btnSearch.addEventListener("click", function () {
  const search = document.querySelector(".search");
  const searchInput = document.querySelector("#search-input");
  const btnSearchClear = document.querySelector("#btn-search-clear");
  const dropdown = document.querySelector(".footer .dropdown");

  getComputedStyle(dropdown);

  if (getComputedStyle(search).display === "none") {
    if (searchInput.value === "") {
      btnSearchClear.innerText = "За-крити";
    }
    search.style.display = "flex";
    dropdown.style.display = "none";
  }
  searchInput.focus()
});// /обработка клика по кнопке поиска <600px

// обработка клика по кнопке очистити <600px
const btnSearchClear = document.querySelector("#btn-search-clear");
btnSearchClear.onclick = function () {
  const search = document.querySelector(".search");
  const dropdown = document.querySelector(".footer .dropdown");

  if (btnSearchClear.innerText === "Закрити") {
    search.style.display = "none";
    dropdown.style.display = "flex";
  }
};// /обработка клика по кнопке очистити <600px

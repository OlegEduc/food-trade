function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function displayContacts() {
  //const dropdownCalls = document.querySelector('.dropdown-calls')
  const dropdownCallsContent = document.querySelector(
    ".dropdown-content-contacts"
  );
  //dropdownCalls.classList.toggle('active');
  dropdownCallsContent.classList.toggle("active");
}

// для мобильных устройств
const dropdown = document.querySelector(".footer .dropdown");
const search = document.querySelector(".search");
const btnSearch = document.querySelector("#btn-search");
const btnSearchClear = document.querySelector("#btn-search-clear");
const btnCategory = document.querySelector("#btn-category");
const sidebarDropdown = document.querySelector(".sidebar-dropdown");

const footer = document.querySelector(".footer");
if (window.location.pathname === "/index.html") {
  if (window.innerWidth > 600) {
    btnSearchClear.innerText = "Очистити";
    search.style.display = "flex";
  }
  btnCategory.addEventListener("click", function () {
    hsddenVisibleElem(sidebarDropdown);
  });

  sidebarDropdown.addEventListener("click", function () {
    hsddenVisibleElem(sidebarDropdown);
  });

  btnSearch.addEventListener("click", function () {
    if (window.innerWidth <= 600) {
      dropdown.style.display = "none";
      search.style.display = "flex";
      btnSearchClear.innerText = "Закрити";
      search.querySelector("#search-input").focus();
    } else {
      btnSearchClear.innerText = "Очистити";
      dropdown.style.display = "none";
    }
  });

  btnSearchClear.addEventListener("click", function () {
    if (window.innerWidth <= 600) {
      if (btnSearchClear.innerText === "Закрити") {
        // const dropdown = document.querySelector(".footer .dropdown");
        dropdown.style.display = "flex";
        search.style.display = "none";
      }
    }
  });
}

function hsddenVisibleElem(el) {
  if (el === null) {
    return;
  }
  if (el.classList.contains("hidedElement")) {
    el.classList.remove("hidedElement");
  } else {
    el.classList.add("hidedElement");
  }
}

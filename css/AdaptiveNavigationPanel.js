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
const search = document.querySelector(".search");
const btnSearch = document.querySelector("#btn-search");
const btnSearchClear = document.querySelector("#btn-search-clear");
const btnCategory = document.querySelector("#btn-category");
const sidebarDropdown = document.querySelector(".sidebar-dropdown");

const footer = document.querySelector(".footer");

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

btnCategory.addEventListener("click", function () {
  hsddenVisibleElem(sidebarDropdown);
});

sidebarDropdown.addEventListener("click", function () {
  hsddenVisibleElem(sidebarDropdown);
});

btnSearch.addEventListener("click", function () {
  if (window.innerWidth <= 600) {
    console.log(btnSearchClear.innerText);
    const dropdown = document.querySelector(".footer .dropdown");
    dropdown.style.display = "none";
    search.style.display = "flex";
    btnSearchClear.innerText = "Закрити";
    search.querySelector("#search-input").focus();
    //
  }
});

btnSearchClear.addEventListener("click", function () {
  if (window.innerWidth <= 600) {
    if (btnSearchClear.innerText === "Закрити") {
      const dropdown = document.querySelector(".footer .dropdown");
      dropdown.style.display = "flex";
      search.style.display = "none";
    } else {
      // dropdown.style.display = "none";
      search.style.display = "flex";
    }
  } else {
    search.querySelector("#search-input").value = "";
  }
});

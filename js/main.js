import { getHeightWindow, setNameBtnClearSearch } from "./ElemSizeControl.js";
import { setHeightUserWindow } from "./ElemSizeControl.js";
const wrapper = document.querySelector(".wrapper");
const header = document.querySelector(".header");
const content = document.querySelector(".content");
const footer = document.querySelector(".footer");

content.style.maxHeight =
  getHeightWindow() - footer.style.height - header.style.height + "px";

if (window.innerWidth > 600) {
  footer.querySelector(".search").style.display = "flex";
  footer.querySelector(".footer .dropdown").style.display = "none"; 
} else {
  footer.querySelector(".search").style.display = "none";
  footer.querySelector(".footer .dropdown").style.display = "flex";
    
}

window.addEventListener("orientationchange", function () {
  setHeightUserWindow();
  // console.log("The orientation of the screen is: " + screen.orientation);
});



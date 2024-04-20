// Внутренний размер окна — это ширина и высота области просмотра (вьюпорта).
// Объект window предоставляет свойства innerWidth и innerHeight:

window.addEventListener("resize", () => {
  //   const windowInnerWidth = window.innerWidth;
  
  const wrapper = document.querySelector(".wrapper");
  const header = document.querySelector(".header");
  const content = document.querySelector(".content");
  const footer = document.querySelector(".footer");
  const windowInnerHeight = getHeightWindow();
  wrapper.style.height = windowInnerHeight + "px";

  content.style.maxHeight = (windowInnerHeight - footer.style.height - header.style.height) + "px";
  if (window.innerWidth > 600) {
    footer.querySelector('.dropdown').style.display = "none";
    footer.querySelector('.search').style.display = "flex";
    btnSearchClear.innerText = "Очистити";
  } else {
    footer.querySelector('.dropdown').style.display = "flex";
    footer.querySelector('.search').style.display = "none";
  }
});

//  Возвращает высоту экрана 
export function getHeightWindow() {
    if (window.innerHeight > window.innerWidth) {
      return Math.max(window.innerHeight, window.innerWidth);
    } else {
      return Math.min(window.innerHeight, window.innerWidth);
    }
}

 

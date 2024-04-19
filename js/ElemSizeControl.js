// Внутренний размер окна — это ширина и высота области просмотра (вьюпорта).
// Объект window предоставляет свойства innerWidth и innerHeight:

const windowInnerWidth = window.innerWidth
const windowInnerHeight = window.innerHeight

const wrapper = document.querySelector('.wrapper')
wrapper.style.height =  windowInnerHeight + 'px';
content.style.height = (windowInnerHeight - footer.style.height - header.style.height) + 'px';
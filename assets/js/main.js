// main.js
let targetElement = document.querySelector("h2");
console.log(targetElement.outerHTML);
targetElement.addEventListener("mouseover", funtion () {
    console.log(this.innerText);
});
targetElement.addEventListener("mouseout", funtion () {
});
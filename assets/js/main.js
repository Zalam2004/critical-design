// main.js
let targetElement = document.querySelector("h2");
console.log(targetElement.outerHTML);
targetElement.addEventListener("mouseover", funtion () {
    console.log(this.innerText);
    this.innerText = "TIME";
    this.style = "cursor: wait";
});
targetElement.addEventListener("mouseout", funtion () {
    this.innerText = "IKEA";
    this.style = "cursor: pointer";
});
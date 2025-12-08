let button = document.getElementById("btn");
let box = document.getElementById("box");

let colors = ["orangered", "blue", "green", "purple", "gold"];
let index = 0;

button.addEventListener("click", function () {
    box.style.backgroundColor = colors[index];
    index++;

    if (index >= colors.length) {
        index = 0;
    }
});
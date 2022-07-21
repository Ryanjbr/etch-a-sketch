const container = document.querySelector('#container');
const slider = document.querySelector("#range");
const size = document.querySelector("#gridSize");
let sliderValue = 10;

createGrid(10); 

slider.oninput = function() {
    size.textContent = slider.value;
    createGrid(slider.value);
};

function createGrid(value) {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    };
    container.style.gridTemplateRows = `repeat(${value}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
    for (let i = 0; i < value*value; i++) {
        const div = document.createElement('div');
        div.setAttribute("class", "gridbox");
        container.appendChild(div);
    };
}
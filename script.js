const container = document.querySelector('#container');
const slider = document.querySelector("#range");
const size = document.querySelector("#gridSize");
const reset = document.querySelector("#reset")
let sliderValue = 10;

createGrid(10); 

slider.oninput = function() {
    size.textContent = slider.value;
    createGrid(slider.value);
};

reset.addEventListener('mouseover', () => {
    createGrid(slider.value)
})

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
    let boxes = document.querySelectorAll('.gridbox')
    for(let box of boxes) {
        box.addEventListener('mouseover', () => {
                box.dataset.color = Math.floor(Math.random() * 255)
                box.style.backgroundColor = `rgb(${box.dataset.color}, ${box.dataset.color}, ${box.dataset.color})`
        }, {once : true});
    }
    for(let box of boxes) {
        box.addEventListener('mouseover', () => {
            box.dataset.color = box.dataset.color - 35;
            box.style.backgroundColor = `rgb(${box.dataset.color}, ${box.dataset.color}, ${box.dataset.color})`
        });
    }
}
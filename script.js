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
    let boxes = document.querySelectorAll('.gridbox')
    for(let box of boxes) {
        box.addEventListener('mouseover', () => {
                box.dataset.red = Math.floor(Math.random() * 255)
                box.dataset.green = Math.floor(Math.random() * 255)
                box.dataset.blue = Math.floor(Math.random() * 255)
                box.style.backgroundColor = `rgb(${box.dataset.red}, ${box.dataset.green}, ${box.dataset.blue})`
                box.setAttribute('data-initial', 'true')
        }, {once : true});
    }
    for(let box of boxes) {
        box.addEventListener('mouseover', () => {
            box.dataset.red = box.dataset.red - 35;
            box.dataset.green = box.dataset.green - 35;
            box.dataset.blue = box.dataset.blue - 35;
            box.style.backgroundColor = `rgb(${box.dataset.red}, ${box.dataset.green}, ${box.dataset.blue})`
        });
    }
}
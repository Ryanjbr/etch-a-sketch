const container = document.querySelector('#container')
const slider = document.querySelector("#range")
let sliderValue = 50;

slider.oninput = function () {
    console.log(slider.value)
    container.style.gridTemplateRows = `repeat(${slider.value}, 1fr)`
    container.style.gridTemplateColumns = `repeat(${slider.value}, 1fr)`
    while(container.firstChild) {
        container.removeChild(container.firstChild)
    }
    for (let i = 0; i < slider.value*slider.value; i++) {
        const div = document.createElement('div');
        div.setAttribute("class", "gridbox");
        container.appendChild(div)
    }
}



function setDimension(dimension) {
    for(let i = 1; i <= dimension; i++){
        const horizontalDiv = document.createElement('div');
        horizontalDiv.classList.add('horizontal');
        let height = (1/dimension) * 100;
        let stringHeight = height.toString() + '%';
        horizontalDiv.style.height = stringHeight;
        container.appendChild(horizontalDiv);
        for(let i = 1; i <= dimension; i++){
            const blockDiv = document.createElement('div');
            blockDiv.classList.add('block');
            let width = (1/dimension) * 100;
            let stringWidth = width.toString() + '%';
            blockDiv.style.width = stringWidth;
            horizontalDiv.appendChild(blockDiv);
        }
    }

}

function removeGrid() {
    let div = container.firstElementChild;
    while (div){
        container.removeChild(div);
        div = container.firstElementChild;
    }
}

function updateGrid(newColor) {
    const grids = document.querySelectorAll('.block');
    grids.forEach(grid => grid.addEventListener('mouseover', () => {
        changeColor(newColor);
    }));
}

function changeColor(color) {
    event.target.style.background = color;
}


function randomColor() {
    let redValue = Math.floor(Math.random() * 256).toString();
    let greenValue = Math.floor(Math.random() * 256).toString();
    let blueValue = Math.floor(Math.random() * 256).toString();
    let rgbValue = 'rgb(' + redValue + ', ' + greenValue + ', ' + blueValue + ')';

    return rgbValue;
}


//this provides the functionality for the 'reset grid' button
const clearButton = document.querySelector("#clear-btn");
clearButton.addEventListener('click', () => {
    let dimension = prompt("Enter a number to set the length & height of the grid: ");
    removeGrid()
    setDimension(dimension)
    let newColor = colorWell.value;
    updateGrid(newColor)
});

let partyMode = false;
const partyButton = document.querySelector('#party-btn');
partyButton.addEventListener('click', () => {
    const grids = document.querySelectorAll('.block');
    grids.forEach(grid => grid.addEventListener('mouseover', () => {
        
        newColor = randomColor();
        console.log(newColor)
        changeColor(newColor);
    }));

});


const colorWell = document.querySelector("#colorWell");
colorWell.addEventListener("change", () => {
    let newColor = colorWell.value;
    updateGrid(newColor)
    
});

const container = document.querySelector('#container');
setDimension(30);
updateGrid("#404040")

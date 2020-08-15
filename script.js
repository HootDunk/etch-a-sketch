const container = document.querySelector('#container');

for(let i = 1; i <= 16; i++){
    const horizontalDiv = document.createElement('div');
    horizontalDiv.classList.add('horizontal');
    container.appendChild(horizontalDiv);
    for(let i = 1; i <= 16; i++){
        const blockDiv = document.createElement('div');
        blockDiv.classList.add('block');
        horizontalDiv.appendChild(blockDiv);
    }    
}

function changeColor() {
    event.target.style.background = "#404040";
    
}

const grids = document.querySelectorAll('.block');
grids.forEach(grid => grid.addEventListener('mouseover', changeColor));

const clearButton = document.querySelector("#clear-btn");
clearButton.addEventListener('click', () => {
    alert("hello world!");
});

// const grid = document.querySelector("block");

// grid.addEventListener("mouseover", () => {

// });
// ^^^ I think i need to use the forEach() method
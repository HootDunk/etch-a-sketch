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

// const grid = document.querySelector("block");

// grid.addEventListener("mouseover", () => {

// });
// ^^^ I think i need to use the forEach() method
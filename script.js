const container = document.querySelector('#container');
// for(let i = 1; i <= 16; i++){
//     const horizontalDiv = document.createElement('div');
//     horizontalDiv.classList.add('horizontal');
//     container.appendChild(horizontalDiv);
//     for(let i = 1; i <= 16; i++){
//         const blockDiv = document.createElement('div');
//         blockDiv.classList.add('block');
//         horizontalDiv.appendChild(blockDiv);
//     }    
// }
setDimension(40);

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
    //hmm this excerpt only deletes half

    // let horizontalDiv = container.getElementsByClassName("horizontal")
    // console.log(horizontalDiv.length)
    // for (let i = 0; i < horizontalDiv.length; i++){
    //     console.log(i)
    //     console.log(horizontalDiv[i])
    //     container.removeChild(horizontalDiv[i]);
    // }

    let div = container.firstElementChild;
    while (div){
        container.removeChild(div);
        div = container.firstElementChild;
    }
}

function changeColor() {
    event.target.style.background = "#404040";
    
}

const grids = document.querySelectorAll('.block');
// grids.forEach(grid => grid.addEventListener('mouseover', changeColor));
grids.forEach(grid => grid.addEventListener('mouseover', () => {
    changeColor();
}));

const clearButton = document.querySelector("#clear-btn");
clearButton.addEventListener('click', () => {
    let dimension = prompt("Enter a number to set the length & height of the grid: ");
    removeGrid()

    
    setDimension(dimension)


    //package this below excerpt and the matching one above in a function  
    const grids = document.querySelectorAll('.block');
    grids.forEach(grid => grid.addEventListener('mouseover', () => {
        changeColor();
    }));

    
});


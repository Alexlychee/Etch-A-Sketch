const DEFAULT_N = 16;
let n = DEFAULT_N;
let grid = document.querySelector(".container");
let button = document.querySelector(".resize");

createGrid(n);
button.addEventListener("click", resizeGrid);

function createGrid(n) {
    grid.innerHTML = '';

    let gridSize = grid.clientWidth / n;

    for (let i = 0; i < n * n; i++) {
        let cell = document.createElement("div");
        cell.classList.add("grid-item");

        cell.style.width = `${gridSize}px`;
        cell.style.height = `${gridSize}px`;
        grid.appendChild(cell);
    }

    let squares = document.querySelectorAll(".grid-item");
    squares.forEach(square => square.addEventListener("mouseover", event =>{
        event.target.classList.add("color");
    }));
}

function resizeGrid() {
    let newGridSize = prompt("Enter a size for the new grid. Must be <= 100px");
    if (newGridSize > 100) {
        alert("Please enter a grid value less than 100.")
        return;
    } 
    if (newGridSize <= 0) {
        alert("Please enter a grid value greater than 0.")
        return;
    }
    createGrid(newGridSize);
}



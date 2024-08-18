const DEFAULT_N = 16;
let n = DEFAULT_N;
let grid = document.querySelector(".container");

createGrid(n);

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
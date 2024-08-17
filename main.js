const DEFAULT_N = 16;

let grid = document.querySelector(".container");
let n = DEFAULT_N;
let columns;
let rows;

function createGrid() {
    for (let i = 0; i <= n; i++) {
        columns = document.createElement("div");
        columns.classList.add("column");
    }
}

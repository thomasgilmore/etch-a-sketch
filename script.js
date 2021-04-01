const container = document.getElementById("container");

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    }
    let gridSquare = document.querySelectorAll("grid-item");
    gridSquare.addEventListener("mouseover", function (event) {
    event.target.style.backgroundColor = "green";
})
}


makeRows(5, 5);
const container = document.querySelector("#container");
const resetButton = document.querySelector("#resetButton");
const rgbButton = document.querySelector("#rgbButton");
const redButton = document.querySelector("#redButton");

function createDivs(rows, columns){
    for (let i = 0; i < rows * columns; i++) {
        let divs = document.createElement("div");
        divs.setAttribute("class", 
        "h-8 w-8 border border-gray-600")
        divs.classList.add("gridSquare");
        container.appendChild(divs);
        divs.addEventListener("mouseenter", function() {
            divs.style.background = "red";
        })
    }
}

function resetGrid() {
    let gridSquare = document.querySelectorAll("div.gridSquare")
    gridSquare.forEach(element => {
        element.style.background = "rgb(203 213 225)"
    });
}


function makeSquares(input){
    let 
}


function rgbColor() {
    let gridSquare = document.querySelectorAll("div.gridSquare");
    gridSquare.forEach(element => {
        element.addEventListener("mouseenter", () => {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);

            element.style.background = `rgb(${r}, ${g}, ${b})`;
        })
    })
}

function redColor() {
    let gridSquare = document.querySelectorAll("div.gridSquare");
    gridSquare.forEach(element => {
        element.addEventListener("mouseenter", () => {
            element.style.background = "red";

        })
    })
}


createDivs(16, 16);

resetButton.addEventListener("click", resetGrid);
rgbButton.addEventListener("click", rgbColor);
redButton.addEventListener("click", redColor);
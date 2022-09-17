const container = document.querySelector("#container");

function createDivs(rows, columns){
    // container.style.setProperty("grid-rows", rows);
    // container.style.setProperty("grid-columns", columns);
    for (let i = 0; i < rows * columns; i++) {
        let divs = document.createElement("div");
        //divs.innerText = (i + 1);
        divs.setAttribute("class", 
        "h-8 w-8 border border-gray-600 hover:bg-green-500")
        container.appendChild(divs);
    }
    // let arr = []
    // for (let i = 0; i < rows * columns; i++) {
    //     const element = <div class="h-8 w-8 border border-gray-600" ></div>;
    //     arr.push(element)
    // }
    // container.appendChild(arr);
}

function makeSquares(input){
    let 
}

createDivs(16, 16);

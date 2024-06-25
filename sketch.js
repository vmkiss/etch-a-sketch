// Get container holding etch-a-sketch grid
let container = document.querySelector(".container");
container.style.backgroundColor = "blue";

//Create function to draw a square grid with given number of rows and columns
function drawGrid(numRows) {
    for (let i = 0; i < numRows ** 2; i++) {
        let newDiv = document.createElement("div");
        let divWidth = 800 / numRows - 2;
        newDiv.style.width = divWidth + "px";
        newDiv.style.height = divWidth + "px";
        newDiv.style.border = "solid black 1px";
        container.appendChild(newDiv);
    }
}

drawGrid(100);

// Create 16x16 grid and append each square to container
/*for (let i = 0; i < 256; i++) {
    let newDiv = document.createElement("div");
    newDiv.style.backgroundColor = "red";
    let divHeight = 960/16 - 2;
    let divWidth = 960/16 - 2;
    newDiv.style.width = divWidth + "px";
    newDiv.style.height = divHeight + "px";
    newDiv.style.border = "solid black 1px";
    container.appendChild(newDiv);
} */

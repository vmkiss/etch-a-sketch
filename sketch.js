// Get container holding etch-a-sketch grid
let container = document.querySelector(".container");

// Create function to draw a square grid with given number of rows and columns
function drawGrid(numRows) {
    for (let i = 0; i < numRows ** 2; i++) {
        let newDiv = document.createElement("div");
        let divWidth = 700 / numRows - 2;

        // Style squares
        newDiv.style.width = divWidth + "px";
        newDiv.style.height = divWidth + "px";
        newDiv.style.border = "solid black 1px";
        
         // Make squares change color when user hovers over them
         newDiv.addEventListener("mouseover", () => {
            newDiv.style.backgroundColor = "black";
         })
         
         container.appendChild(newDiv);
    }
}

// Allow user to clear board and greate new grid by pressing clear all button
clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click", () => {
    userNum = prompt("Enter a number between 0 and 100")
    if (userNum < 0 || userNum > 100) {
        alert("Please enter a number between 0 and 100!")
    } else {
        container.textContent = "";
        drawGrid(userNum);
    }

})

// Draw default 16x16 grid
drawGrid(16);





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

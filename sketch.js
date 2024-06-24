// Get container holding etch-a-sketch grid
container = document.querySelector(".container");
container.style.backgroundColor = "blue";
// Create 16x16 grid and append each square to container
for (let i = 0; i <= 15; i++) {
    newDiv = document.createElement("div");
    newDiv.style.backgroundColor = "red";
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.border = "solid black";
    container.appendChild(newDiv);
}

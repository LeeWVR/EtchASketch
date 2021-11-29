const canvas = document.querySelector(".canvas");
let row =16;
canvas.style.gridTemplateColumns = `repeat(${row},1fr)`;
let totalDivs = row * row;

for (i=0; i< totalDivs; i++) {
let block = document.createElement("div");
block.classList.add("block");
canvas.appendChild(block);
}
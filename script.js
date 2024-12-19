const grid = document.querySelector(".container");
const sizeBtn = document.querySelector(".size");
const resetBtn = document.querySelector(".reset");
let size = 16;
let color = "#d5c4a1";

function changeColor() {
  this.style.backgroundColor = color;
}

function createGrid(size) {
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    grid.appendChild(row);
    for (let j = 0; j < size; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      row.appendChild(box);
      box.addEventListener("mouseenter", changeColor);
    }
  }
}

function resetGrid() {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.style.backgroundColor = "#1d2021";
  });
}

function getSize() {
  let userInput = Number(prompt("Enter a size (1 to 100)"));
  while (!(userInput >= 1 && userInput <= 100)) {
    userInput = Number(prompt("Enter a valid size (1 to 100)"));
  }
  createGrid(userInput);
}

function deleteGrid() {
  const rows = document.querySelectorAll(".row");
  rows.forEach((row) => {
    row.remove();
  });
}

resetBtn.addEventListener("click", resetGrid);
sizeBtn.addEventListener("click", () => {
  deleteGrid();
  getSize();
});

createGrid(size);

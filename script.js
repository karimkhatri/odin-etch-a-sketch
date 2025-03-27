const sketch = document.querySelector(".sketch");
const randomBtn = document.querySelector(".random");
const colorBtn = document.querySelector(".color");
const eraserBtn = document.querySelector(".eraser");
const clearBtn = document.querySelector(".clear");
const sizeBtn = document.querySelector(".size");
let size = 16;
let color = "#111";

function createSketch(size) {
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    sketch.appendChild(row);

    for (let j = 0; j < size; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      row.appendChild(box);
      box.addEventListener("mouseenter", colorBox);
    }
  }
}

function deleteSketch() {
  const rows = document.querySelectorAll(".row");
  rows.forEach((row) => row.remove());
  createSketch(size);
}

function changeSize() {
  while (true) {
    const input = prompt(
      "Enter the size of sketch (1 to 100). Type q to quit.",
    );
    if (input >= 1 && input <= 100) {
      size = Number(input);
      deleteSketch();
      break;
    } else if (input === "q") {
      break;
    }
  }
}

function colorBox(e) {
  if (color === "random") {
    e.target.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360 + 1)}, 100%, 50%)`;
  } else {
    e.target.style.backgroundColor = color;
  }
}

function changeColor(choice) {
  color = choice;
}

colorBtn.addEventListener("click", () => changeColor("#111"));

randomBtn.addEventListener("click", () => changeColor("random"));

eraserBtn.addEventListener("click", () => changeColor("#ccc"));

clearBtn.addEventListener("click", deleteSketch);

sizeBtn.addEventListener("click", changeSize);

createSketch(size);

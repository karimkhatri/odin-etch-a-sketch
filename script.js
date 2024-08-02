const gridContainer = document.querySelector('.container');
const sizeInput = document.querySelector('#sizeInput');
const sizeBtn = document.querySelector('#size');
const resetBtn = document.querySelector('#reset');
const colorBtn = document.querySelector('#color');
const colorPickerEl = document.querySelector('#color-picker')
const eraserBtn = document.querySelector('#eraser');
const rainbowBtn = document.querySelector('#rainbow');
let size = 16;
let color = '#111111';

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const gridRow = document.createElement('div');
        gridContainer.appendChild(gridRow);
        gridRow.className = 'row';
        for (let j = 0; j < size; j++) {
            const gridBox = document.createElement('div');
            gridRow.appendChild(gridBox);
            gridBox.className = 'box'
            gridBox.addEventListener('mouseover', paintBox)
        }
    }
}

function deleteGrid() {
    const rows = document.querySelectorAll('.row')
    rows.forEach(row => {
        row.remove();
    })
}

function resetGrid() {
    deleteGrid();
    createGrid(size);
}

function changeColor(choice) {
    color = choice;
}

function paintBox() {
    if (color === 'rainbow') {
        this.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360 + 1)}, 100%, 50%)`
    } else {
        this.style.backgroundColor = color;
    }
}



sizeBtn.addEventListener('click', function() {
    if (sizeInput.value < 1 || sizeInput.value > 64) {
        alert('Please enter valid size (1 to 64)');
    } else {
        size = sizeInput.value;
        deleteGrid();
        createGrid(size);
        
    }
});

resetBtn.addEventListener('click', resetGrid);

rainbowBtn.addEventListener('click', () => {
    changeColor('rainbow');
});

colorBtn.addEventListener('click', () => {
    changeColor('#111111');
});

eraserBtn.addEventListener('click', () => {
    changeColor('#dddddd');
});

colorPickerEl.oninput = (e) => color = e.target.value;  


createGrid(size);


let count = 0;
const counterDisplay = document.querySelector('.counter');

function increase() {
    count++;
    updateDisplay();
}

function decrease() {
    count--;
    updateDisplay();
}

function updateDisplay() {
    counterDisplay.textContent = count;
}

function reset() {
    count = 0;
    updateDisplay();
}


// script.js에 추가
function changeColor() {
    const colors = ['red', 'blue', 'green', 'purple'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    counterDisplay.style.color = randomColor;
}
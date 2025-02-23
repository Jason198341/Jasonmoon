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
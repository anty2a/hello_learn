const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn")
const countDisplay = document.getElementById("countDisplay");

let count = 0;

function updateDisplay() {
    countDisplay.textContent = count;
}

increaseBtn.addEventListener("click", function () {

    count++;
    updateDisplay();
});

decreaseBtn.addEventListener("click", function () {

    count--;
    updateDisplay();
});

resetBtn.addEventListener("click", function () {

    count = 0;
    updateDisplay();
});

console.log(count);

updateDisplay();

let timerInterval = null;
let seconds = 0;
const timerDisplay = document.getElementById('timer-display');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');

function updateDisplay() {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    // padStart ensures two digits are always displayed (e.g., 01, 05, 10)
    timerDisplay.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (timerInterval !== null) return; // Prevent multiple intervals running
    timerInterval = setInterval(() => {
        seconds++;
        updateDisplay();
    }, 1000); // Update every 1000ms (1 second)
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    seconds = 0;
    updateDisplay();
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

// Initial display update
updateDisplay();

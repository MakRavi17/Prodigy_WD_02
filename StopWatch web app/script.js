let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const millisecondsDisplay = document.getElementById('milliseconds');

function startStopwatch() {
    if (!interval) {
        interval = setInterval(() => {
            milliseconds++;
            if (milliseconds === 100) {
                milliseconds = 0;
                seconds++;
            }
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }

            minutesDisplay.textContent = minutes < 10 ? `0${minutes}` : minutes;
            secondsDisplay.textContent = seconds < 10 ? `0${seconds}` : seconds;
            millisecondsDisplay.textContent = milliseconds < 10 ? `0${milliseconds}` : milliseconds;
        }, 10);
    }
}

function pauseStopwatch() {
    clearInterval(interval);
    interval = null;
}

function resetStopwatch() {
    clearInterval(interval);
    interval = null;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    minutesDisplay.textContent = '00';
    secondsDisplay.textContent = '00';
    millisecondsDisplay.textContent = '00';
}

startBtn.addEventListener('click', startStopwatch);
pauseBtn.addEventListener('click', pauseStopwatch);
resetBtn.addEventListener('click', resetStopwatch);

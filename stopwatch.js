const timer = document.getElementById("timer");
const stopButton = document.getElementById("stop");
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");

let timerInterval;
let startTime = 0;

const formatTime = (startTime) => {
  const hours = Math.floor(startTime / 3600)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((startTime % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (startTime % 60).toString().padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
};

const startTimer = () => {
  timerInterval = setInterval(() => {
    startTime++;

    timer.textContent = formatTime(startTime);
  }, 1000);

  stopButton.disabled = false;
  startButton.disabled = true;
  resetButton.disabled = false;
};

const stopTimer = () => {
  clearInterval(timerInterval);

  stopButton.disabled = true;
  startButton.disabled = false;
};

const resetTimer = () => {
  clearInterval(timerInterval);

  startTime = 0;
  timer.textContent = "00:00:00";

  stopButton.disabled = true;
  resetButton.disabled = true;
  startButton.disabled = false;
};

stopButton.addEventListener("click", stopTimer);
startButton.addEventListener("click", startTimer);
resetButton.addEventListener("click", resetTimer);

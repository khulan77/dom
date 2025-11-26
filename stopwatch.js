const timer = document.getElementById("timer");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let time = 0;
let interval;

function updateTimer() {
  const h = String(Math.floor(time / 3600)).padStart(2, "0");
  const m = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
  const s = String(time % 60).padStart(2, "0");

  timer.textContent = `${h}:${m}:${s}`;
}

startBtn.onclick = () => {
  if (!interval) {
    interval = setInterval(() => {
      time++;
      updateTimer();
    }, 1000);
  }
};

stopBtn.onclick = () => {
  clearInterval(interval);
  interval = null;
};

resetBtn.onclick = () => {
  clearInterval(interval);
  interval = null;
  time = 0;
  updateTimer();
};

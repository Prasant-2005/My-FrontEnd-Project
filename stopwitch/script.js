let startTime = 0;
let elapsedTime = 0;
let intervalId;

function start() {
  if (intervalId) return; // Prevent multiple intervals

  startTime = Date.now() - elapsedTime;
  intervalId = setInterval(updateTime, 1000);
}

function stop() {
  clearInterval(intervalId);
  intervalId = null;
  elapsedTime = Date.now() - startTime;
}

function reset() {
  clearInterval(intervalId);
  intervalId = null;
  elapsedTime = 0;
  document.getElementById("display").textContent = "00:00:00";
}

function updateTime() {
  const currentTime = Date.now() - startTime;
  const hours = Math.floor((currentTime / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((currentTime / (1000 * 60)) % 60);
  const seconds = Math.floor((currentTime / 1000) % 60);

  document.getElementById("display").textContent = 
    `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(unit) {
  return unit.toString().padStart(2, "0");
}

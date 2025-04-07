const timerElement = document.getElementById('timer');

function updateTimer() {
  const now = new Date();
  const formattedTime = now.toLocaleString(); // shows date + time
  timerElement.textContent = formattedTime;
}

// Update immediately on load
updateTimer();

// Update every second
setInterval(updateTimer, 1000);

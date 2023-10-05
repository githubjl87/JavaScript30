let countDown;
const timerDisplay = document.querySelector('.display__time-left');

function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);

  setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0){
      clearInterval(countDown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);

}

function displayTimeLeft(seconds) {
  const mins = Math.floor(seconds / 60);
  const remainderSecs = seconds % 60;
  const display = `${mins}:${remainderSecs < 10 ? '0' : ''}${remainderSecs}`;
  timerDisplay.textContent = display;
}

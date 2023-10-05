let countDown;

function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeleft(seconds);

  setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0){
      clearInterval(countDown);
      return;
    }
    displayTimeleft(secondsLeft);
  }, 1000);

}

function displayTimeleft(seconds) {
  console.log (seconds);
}

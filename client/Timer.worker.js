let interval = null;

// type EventData = { duration: number }; Duration is ms length of timer you want to start
self.onmessage = (event) => {
  switch (event.data.type) {
    case "startTimer":
      handleStartTimer(event);
      break;
    case "stopTimer":
      handleStopTimer();
      break;
  }
};

function handleStopTimer() {
  clearInterval(interval);
}

function handleStartTimer(event) {
  const duration = event.data.duration;
  if (!isNaN(duration)) {
    const durationSeconds = duration / 1000;
    let elapsedTime = durationSeconds;

    startTimer(() => {
      elapsedTime--;
      postMessage({ elapsedTime });
      if (elapsedTime <= 0) {
        handleStopTimer();
      }
    }, duration);
  }
}

async function startTimer(secondCallback) {
  interval = setInterval(secondCallback, 1000);
}

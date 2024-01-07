// type EventData = { duration: number, updateInterval }; Duration is ms length of timer you want to start

self.onmessage = (event) => {
  switch (event.data.type) {
    case "startTimer":
      handleStartTimer(event);
      break;
    case "pauseTimer":
      handlePauseTimer(event);
      break;
  }
};

function handlePauseTimer(event) {
  //TODO
}

function handleStartTimer(event) {
  //TODO
}

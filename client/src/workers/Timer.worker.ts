import { TimerWorkerMessage, TimerWorkerResponse } from "../common/types";

let intervalID = -1;
const INTERVAL_MS = 200;

self.onmessage = (event) => {
  const data = event.data as TimerWorkerMessage;
  const eventType = data.type;

  switch (eventType) {
    case "start":
      handleStartTimer();
      break;
    case "stop":
      handleStopTimer();
      break;
    case "discard":
      handleDiscardTimer();
  }
};

const handleStartTimer = () => {
  const startTime = Date.now();

  const stepFunc = () => {
    const diff = Date.now() - startTime;
    const processedDiff = Math.floor(diff / 1000);
    const response: TimerWorkerResponse = { secondsPassed: processedDiff };
    postMessage(response);
  };

  intervalID = setInterval(stepFunc, INTERVAL_MS);
};

const handleStopTimer = () => clearInterval(intervalID);

const handleDiscardTimer = () => self.close();

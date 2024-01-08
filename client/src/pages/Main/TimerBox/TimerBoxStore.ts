import { action, computed, makeObservable, observable } from "mobx";
import { formatTime } from "../../../common/utils";
import { TimerWorkerMessage, TimerWorkerResponse } from "../../../common/types";

const DEFAULT_DURATION_SECONDS = 5;

class TimerBoxStore {
  isTimerStarted: boolean = false;
  secondsPassed: number = 0;

  constructor(
    private readonly worker: Worker,
    private readonly duration = DEFAULT_DURATION_SECONDS
  ) {
    makeObservable(this, {
      isTimerStarted: observable,
      startTimer: action,
      secondsPassed: observable,
      onTimerUpdate: action,
      pauseTimer: action,
      elapsedTimeMs: computed,
      elapsedTimeFormatted: computed,
    });
  }

  get elapsedTimeFormatted(): string {
    return formatTime(this.secondsPassed);
  }

  get elapsedTimeMs() {
    return this.secondsPassed * 1000;
  }

  toggleTimer() {
    if (!this.isTimerStarted) {
      this.startTimer();
    } else {
      this.pauseTimer();
    }
  }

  startTimer() {
    this.isTimerStarted = true;
    console.log("timer started");
    const message: TimerWorkerMessage = { type: "start" };
    this.worker.postMessage(message);
  }

  pauseTimer() {
    this.isTimerStarted = false;
    const message: TimerWorkerMessage = { type: "stop" };
    this.worker.postMessage(message);
  }

  onTimerUpdate(event: MessageEvent<TimerWorkerResponse>) {
    const { secondsPassed } = event.data;

    if (!isNaN(secondsPassed)) {
      this.secondsPassed = secondsPassed;
      console.log("timer Tick", secondsPassed);
    }
    if (this.secondsPassed === this.duration) this.pauseTimer();
  }

  setupNextSession() {}

  initListeners() {
    this.worker.addEventListener("message", (event) => this.onTimerUpdate(event));
  }
}

export default TimerBoxStore;

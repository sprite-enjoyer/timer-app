import { action, computed, makeObservable, observable } from "mobx";
import { formatTime } from "../../../common/utils";

const DEFAULT_DURATION_MS = 5000;

class TimerBoxStore {
  isTimerStarted: boolean = false;

  elapsedTimeSeconds: number;

  constructor(
    private readonly worker: Worker,
    private readonly duration = DEFAULT_DURATION_MS
  ) {
    makeObservable(this, {
      isTimerStarted: observable,
      elapsedTimeSeconds: observable,
      startTimer: action,
      onTimerUpdate: action,
      pauseTimer: action,
      elapsedTimeMs: computed,
      elapsedTimeFormatted: computed,
    });

    this.elapsedTimeSeconds = this.duration / 1000;
  }

  get elapsedTimeFormatted(): string {
    return formatTime(this.elapsedTimeSeconds);
  }

  get elapsedTimeMs() {
    return this.elapsedTimeSeconds * 1000;
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
    this.worker.postMessage({
      type: "startTimer",
      duration: this.elapsedTimeMs,
    });
  }

  pauseTimer() {
    this.isTimerStarted = false;
    this.worker.postMessage({ type: "stopTimer" });
  }

  onTimerUpdate(event: MessageEvent) {
    const elapsedTimeSeconds: number = event.data.elapsedTime;

    if (!isNaN(elapsedTimeSeconds)) {
      this.elapsedTimeSeconds = elapsedTimeSeconds;
      console.log("timer Tick", elapsedTimeSeconds);
    }
  }

  initListeners() {
    this.worker.addEventListener("message", (event) => this.onTimerUpdate(event));
  }
}

export default TimerBoxStore;

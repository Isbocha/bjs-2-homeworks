class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }
    for (let element of this.alarmCollection) {
      if (element.time === time) {
        console.warn('Уже присутствует звонок на это же время');
      }
    }
    this.alarmCollection.push({
      time,
      callback,
      canCall: true,
    });
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter((element) => element.time !== time);
  }

  getCurrentFormattedTime() {
    const time = new Date();
    const hours = (time.getHours() < 10 ? '0' : '') + time.getHours();
    const minutes = (time.getMinutes() < 10 ? '0' : '') + time.getMinutes();
    return (hours + ':' + minutes);
  }

  start() {
    if (this.intervalId || this.intervalId !== null) {
      return;
    }
    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach((element) => {
        if ((element.time === this.getCurrentFormattedTime()) && (element.canCall = true)) {
          element.canCall = false;
          element.callback();
        }
      })
    }, 1000);
  }

  stop() {
    clearInterval();
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((element) => element.canCall = true);
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
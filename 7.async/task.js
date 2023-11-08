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
          return;
        }
      }
      this.alarmCollection.push({
        time,
        callback,
        canCall: true,
      });
    }
      
    removeClock(time) {
    //   delete this.alarmCollection.filter((element) => element.time === time);
      if (this.alarmCollection.filter((element) => element.time === time)){
        let index = this.alarmCollection.indexOf(item => item.time);
        this.alarmCollection.splice(index)
        }
   }
      
    getCurrentFormattedTime() {
      const time = new Date();
      const hours = (time.getHours() < 10 ? '0' : '') + time.getHours();
      const minutes = (time.getMinutes() < 10 ? '0' : '') + time.getMinutes();
      return (hours + ':' + minutes);
    }
  
    start() {
      if (this.intervalId || this.intervalId !== null) {
        throw new Error('невозможно создавать несколько интервалов');
      } else if (this.alarmCollection.forEach((element) => 
      element.canCall = true && element.time === this.getCurrentFormattedTime())) {
        this.intervalId = setInterval(() => {
          this.alarmCollection.canCall = false;
          const callback = this.alarmCollection.callback();
          this.intervalId = callback;
        }, 2000);
      }
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
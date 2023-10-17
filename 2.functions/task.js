function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= min) {
      min = arr[i];
    } else if (arr[i] >= max) {
      max = arr[i];
    }
    sum += arr[i];
  }
  let avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return Number(sum.toFixed(2));
}

function differenceMaxMinWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
       if (arr[i] <= min) {
      min = arr[i];
    } else if (arr[i] >= max) {
      max = arr[i];
    }
  }
  let difference = max - min;
  return Number(difference.toFixed(2));
}

function differenceEvenOddWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  let difference = sumEvenElement - sumOddElement;
  return Number(difference.toFixed(2));
}

function averageEvenElementsWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }
  return Number((sumEvenElement / countEvenElement).toFixed(2));
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = 0;
  for (let i = 0; i < arrOfArr.length; i++) {
    let max = func(...arrOfArr[i]);
    if (max > maxWorkerResult) {
      maxWorkerResult = max;
    }
  }
  return Number(maxWorkerResult.toFixed(2));
}

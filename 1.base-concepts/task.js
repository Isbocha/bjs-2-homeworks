"use strict"
function solveEquation(a, b, c) {
  const arr = [];
  const d = b * b - 4 * a * c;
  if (d > 0) {
    const x1 = (-b + Math.sqrt(d) )/(2*a);
    const x2 = (-b - Math.sqrt(d) )/(2*a);
    arr.push(x1);
    arr.push(x2);
  } else if (d === 0) {
    const x = -b/(2*a);
    arr.push(x)
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const percentInMonth = +percent / 100 / 12;
  const credit = +amount - +contribution;
  const payment = credit * (percentInMonth + (percentInMonth / ((Math.pow((1 + percentInMonth), countMonths) - 1))));
  const allSum = payment * +countMonths;
  return (+allSum.toFixed(2))
}
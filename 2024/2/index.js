import { readfile } from "../util.js";

const checkIncrease = (isIncreasing, a, b) => {
  if (isIncreasing) {
    if (a >= b) {
      return false;
    }
  } else {
    if (a <= b) {
      return false;
    }
  }

  return true;
};

const file = readfile("input.txt");
let amount = 0;

file.split(/\r?\n/).forEach((line) => {
  const reports = line.split(" ");
  let safe = true;

  if (parseInt(reports[1]) === parseInt(reports[0])) safe = false;
  const isIncreasing = parseInt(reports[1]) - parseInt(reports[0]) > 0;

  for (let i = 0; i < reports.length - 1; i++) {
    if (!checkIncrease(isIncreasing, parseInt(reports[i]), reports[i + 1])) {
      safe = false;
      break;
    }

    if (Math.abs(parseInt(reports[i]) - parseInt(reports[i + 1])) > 3) {
      safe = false;
      break;
    }
  }
  if (safe) amount++;
});

console.log(amount);

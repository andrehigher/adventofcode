import { readfile } from "../util.js";

function isIncreasing(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (
      arr[i] <= arr[i - 1] ||
      arr[i] - arr[i - 1] < 1 ||
      arr[i] - arr[i - 1] > 3
    ) {
      return false;
    }
  }
  return true;
}

function isDecreasing(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (
      arr[i] >= arr[i - 1] ||
      arr[i - 1] - arr[i] < 1 ||
      arr[i - 1] - arr[i] > 3
    ) {
      return false;
    }
  }
  return true;
}

function isSafeWithOneRemoval(report) {
  for (let i = 0; i < report.length; i++) {
    const newReport = [...report.slice(0, i), ...report.slice(i + 1)];
    if (isIncreasing(newReport) || isDecreasing(newReport)) {
      return true;
    }
  }
  return false;
}

const file = readfile("input.txt");
let amount = 0;

file.split(/\r?\n/).forEach((line) => {
  let reports = line.split(" ");
  reports = reports.map(Number);

  if (
    isIncreasing(reports) ||
    isDecreasing(reports) ||
    isSafeWithOneRemoval(reports)
  ) {
    amount++;
  }
});

console.log(amount);

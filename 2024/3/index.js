import { readfile } from "../util.js";

const file = readfile("input.txt");

const parseAndCalculate = (match) => {
  const numbers = match.match(/\d+/g);
  if (numbers && numbers.length === 2) {
    const [a, b] = numbers.map(Number);
    if (a >= 1 && a <= 999 && b >= 1 && b <= 999) {
      return a * b;
    }
  }
  return 0;
};

let sum = 0;

// Regular expression to match valid mul(X, Y) instructions
const regex = /mul\(\d{1,3},\d{1,3}\)/g;
const matches = file.match(regex);

if (matches) {
  for (const match of matches) {
    sum += parseAndCalculate(match);
  }
}

console.log(sum);

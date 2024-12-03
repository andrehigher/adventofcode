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
let mulEnabled = true; // At the beginning, mul instructions are enabled

// Regular expression to match mul(X, Y), do() and don't() instructions
const regex = /mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\)/g;
const matches = file.match(regex);

if (matches) {
  for (const match of matches) {
    if (match === "do()") {
      mulEnabled = true;
    } else if (match === "don't()") {
      mulEnabled = false;
    } else if (mulEnabled && match.startsWith("mul(")) {
      sum += parseAndCalculate(match);
    }
  }
}

console.log(sum);

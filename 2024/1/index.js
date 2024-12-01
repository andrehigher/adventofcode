import { readfile } from "../util.js";

const file = readfile("input.txt");
const firstArr = [];
const secondArr = [];
file.split(/\r?\n/).forEach((line, index) => {
  const [first, second] = line.split("   ");
  firstArr.push(parseInt(first));
  secondArr.push(parseInt(second));
});

firstArr.sort();
secondArr.sort();

const distances = [];
for (let i = 0; i < firstArr.length; i++) {
  distances.push(Math.abs(secondArr[i] - firstArr[i]));
}

console.log(
  "Max distance",
  distances.reduce((a, b) => a + b, 0)
);

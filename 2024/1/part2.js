import { readfile } from "../util.js";

const file = readfile("input.txt");
const map = {};

const firstArr = [];
file.split(/\r?\n/).forEach((line, index) => {
  const [first, second] = line.split("   ");
  firstArr.push(parseInt(first));
  const secondValue = parseInt(second);
  if (!map[secondValue]) map[secondValue] = 0;
  map[secondValue]++;
});

let total = 0;
for (let i = 0; i < firstArr.length; i++) {
  if (!map[firstArr[i]]) continue;
  total += firstArr[i] * map[firstArr[i]];
}

console.log("total", total);

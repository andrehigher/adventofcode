import { readfile } from "../util.js";

const file = readfile("input.txt").trim().split("\n");

const rules = [];
const updates = [];
let parsingRules = true;

for (const line of file) {
  const trimmedLine = line.trim();
  if (!trimmedLine) {
    parsingRules = false;
    continue;
  }

  if (parsingRules) {
    if (trimmedLine.includes("|")) {
      const [x, y] = trimmedLine.split("|").map(Number);
      if (!isNaN(x) && !isNaN(y)) {
        rules.push([x, y]);
      }
    }
  } else {
    const pages = trimmedLine.split(",").map(Number);
    if (pages.every((n) => !isNaN(n))) {
      updates.push(pages);
    }
  }
}

const isUpdateValid = (update) => {
  const indexMap = new Map();
  update.forEach((page, index) => indexMap.set(page, index));

  for (const [x, y] of rules) {
    if (indexMap.has(x) && indexMap.has(y)) {
      if (indexMap.get(x) >= indexMap.get(y)) {
        console.log(`Invalid Rule Broken: ${x}|${y} in Update:`, update);
        return false; // Rule violated
      }
    }
  }
  return true;
};

const getMiddlePage = (update) => {
  const midIndex = Math.floor(update.length / 2);
  return update[midIndex];
};

let sumOfMiddlePages = 0;

for (const update of updates) {
  if (isUpdateValid(update)) {
    const middlePage = getMiddlePage(update);
    console.log(`Valid Update: ${update}, Middle Page: ${middlePage}`);
    sumOfMiddlePages += middlePage;
  }
}

console.log(
  "Sum of middle pages from correctly ordered updates:",
  sumOfMiddlePages
);

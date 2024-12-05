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
  update.forEach((page, index) => indexMap.set(page, index)); // Map page to its index

  for (const [x, y] of rules) {
    if (indexMap.has(x) && indexMap.has(y)) {
      if (indexMap.get(x) >= indexMap.get(y)) {
        return false; // Rule violated
      }
    }
  }
  return true;
};

const sortUpdate = (update) => {
  const graph = new Map();
  const inDegree = new Map();

  update.forEach((page) => {
    graph.set(page, []);
    inDegree.set(page, 0);
  });

  for (const [x, y] of rules) {
    if (update.includes(x) && update.includes(y)) {
      graph.get(x).push(y);
      inDegree.set(y, inDegree.get(y) + 1);
    }
  }

  const queue = [];
  update.forEach((page) => {
    if (inDegree.get(page) === 0) {
      queue.push(page);
    }
  });

  const sorted = [];
  while (queue.length > 0) {
    const current = queue.shift();
    sorted.push(current);
    for (const neighbor of graph.get(current)) {
      inDegree.set(neighbor, inDegree.get(neighbor) - 1);
      if (inDegree.get(neighbor) === 0) {
        queue.push(neighbor);
      }
    }
  }

  return sorted;
};

const getMiddlePage = (update) => {
  const midIndex = Math.floor(update.length / 2);
  return update[midIndex];
};

let sumOfMiddlePages = 0;

for (const update of updates) {
  if (!isUpdateValid(update)) {
    const correctedUpdate = sortUpdate(update);
    const middlePage = getMiddlePage(correctedUpdate);
    console.log(
      `Corrected Update: ${correctedUpdate}, Middle Page: ${middlePage}`
    );
    sumOfMiddlePages += middlePage;
  }
}

console.log("Sum of middle pages from corrected updates:", sumOfMiddlePages);

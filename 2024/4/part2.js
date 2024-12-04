import { readfile } from "../util.js";

const file = readfile("input.txt");

// Parse the grid into a 2D array
const grid = file
  .trim()
  .split("\n")
  .map((line) => line.split(""));

// Check if a diagonal forms a valid "MAS" or "SAM"
const isValidMAS = (m, a, s) =>
  (m === "M" && a === "A" && s === "S") ||
  (m === "S" && a === "A" && s === "M");

let count = 0;

for (let x = 1; x < grid.length - 1; x++) {
  for (let y = 1; y < grid[0].length - 1; y++) {
    const topLeft = grid[x - 1][y - 1];
    const middle = grid[x][y];
    const bottomRight = grid[x + 1][y + 1];
    const topRight = grid[x - 1][y + 1];
    const bottomLeft = grid[x + 1][y - 1];

    if (
      isValidMAS(topLeft, middle, bottomRight) &&
      isValidMAS(topRight, middle, bottomLeft)
    ) {
      count++;
    }
  }
}

console.log(count);

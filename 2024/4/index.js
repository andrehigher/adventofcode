import { readfile } from "../util.js";

const file = readfile("input.txt");

const grid = file
  .trim()
  .split("\n")
  .map((line) => line.split(""));

const targetWord = "XMAS";
const wordLength = targetWord.length;

const directions = [
  { dx: 0, dy: 1 }, // Horizontal right
  { dx: 0, dy: -1 }, // Horizontal left
  { dx: 1, dy: 0 }, // Vertical down
  { dx: -1, dy: 0 }, // Vertical up
  { dx: 1, dy: 1 }, // Diagonal down-right
  { dx: 1, dy: -1 }, // Diagonal down-left
  { dx: -1, dy: 1 }, // Diagonal up-right
  { dx: -1, dy: -1 }, // Diagonal up-left
];

let count = 0;

const checkWord = (x, y, dx, dy) => {
  for (let i = 0; i < wordLength; i++) {
    const nx = x + i * dx;
    const ny = y + i * dy;

    if (nx < 0 || ny < 0 || nx >= grid.length || ny >= grid[0].length) {
      return false;
    }

    if (grid[nx][ny] !== targetWord[i]) {
      return false;
    }
  }
  return true;
};

for (let x = 0; x < grid.length; x++) {
  for (let y = 0; y < grid[0].length; y++) {
    for (const { dx, dy } of directions) {
      if (checkWord(x, y, dx, dy)) {
        count++;
      }
    }
  }
}

console.log(count);

import { readfile } from "../util.js";

const file = readfile("input.txt").trim().split("\n");

const map = file.map((line) => line.split(""));
let guardX, guardY, direction;

for (let x = 0; x < map.length; x++) {
  for (let y = 0; y < map[0].length; y++) {
    if ("^v<>".includes(map[x][y])) {
      guardX = x;
      guardY = y;
      direction = map[x][y];
      map[x][y] = ".";
      break;
    }
  }
}

const directions = [
  { dx: -1, dy: 0 }, // Up (^)
  { dx: 0, dy: 1 }, // Right (>)
  { dx: 1, dy: 0 }, // Down (v)
  { dx: 0, dy: -1 }, // Left (<)
];

let dirIndex = { "^": 0, ">": 1, v: 2, "<": 3 }[direction];
const visited = new Set();
visited.add(`${guardX},${guardY}`);

while (true) {
  const { dx, dy } = directions[dirIndex];
  const nextX = guardX + dx;
  const nextY = guardY + dy;

  if (nextX < 0 || nextY < 0 || nextX >= map.length || nextY >= map[0].length) {
    break;
  }

  if (map[nextX][nextY] === "#") {
    dirIndex = (dirIndex + 1) % 4;
  } else {
    guardX = nextX;
    guardY = nextY;
    visited.add(`${guardX},${guardY}`);
  }
}

console.log(visited.size);

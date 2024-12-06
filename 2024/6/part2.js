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

if (!direction) {
  process.exit(1);
}

const directions = [
  { dx: -1, dy: 0 }, // Up (^)
  { dx: 0, dy: 1 }, // Right (>)
  { dx: 1, dy: 0 }, // Down (v)
  { dx: 0, dy: -1 }, // Left (<)
];

const directionMap = { "^": 0, ">": 1, v: 2, "<": 3 };

let dirIndex = directionMap[direction];

const simulate = (map, startX, startY, startDirIndex) => {
  const visited = new Set();
  let x = startX;
  let y = startY;
  let dir = startDirIndex;

  while (true) {
    const state = `${x},${y},${dir}`;
    if (visited.has(state)) {
      return true;
    }
    visited.add(state);

    const { dx, dy } = directions[dir];
    const nextX = x + dx;
    const nextY = y + dy;

    if (
      nextX < 0 ||
      nextY < 0 ||
      nextX >= map.length ||
      nextY >= map[0].length
    ) {
      return false;
    }

    if (map[nextX][nextY] === "#") {
      dir = (dir + 1) % 4;
    } else {
      x = nextX;
      y = nextY;
    }
  }
};

let validPositions = 0;

for (let x = 0; x < map.length; x++) {
  for (let y = 0; y < map[0].length; y++) {
    if (map[x][y] === "." && !(x === guardX && y === guardY)) {
      map[x][y] = "#";

      if (simulate(map, guardX, guardY, dirIndex)) {
        validPositions++;
      }

      map[x][y] = ".";
    }
  }
}

console.log(validPositions);

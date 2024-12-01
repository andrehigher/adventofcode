import fs from "fs";

function isNumber(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}

function readfile(fileName) {
  try {
    return fs.readFileSync(fileName, "utf8");
  } catch (err) {
    console.error(err);
  }
}

export { isNumber, readfile };

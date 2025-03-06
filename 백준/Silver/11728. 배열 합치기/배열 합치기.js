const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();

const tmp = [];

for (const i of input) {
  const arr = i.split(" ").map(Number);
  for (const j of arr) {
    tmp.push(j);
  }
}

console.log(tmp.sort((a, b) => a - b).join(" "));

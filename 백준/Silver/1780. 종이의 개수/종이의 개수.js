const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const n = +input[0];
const paper = input.slice(1).map((v) => v.split(" ").map((vv) => +vv));

const count = [0, 0, 0]; // -1 0 1 카운트

const recursion = (n, y, x) => {
  const num = paper[y][x];
  let numCount = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (paper[y + i][x + j] === num) numCount++;
      else break;
    }
  }
  if (numCount === n * n) count[num + 1]++;
  else {
    n /= 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        recursion(n, y + i * n, x + j * n);
      }
    }
  }
};
recursion(n, 0, 0);
console.log(count.join("\n"));

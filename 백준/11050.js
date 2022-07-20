const fs = require("fs");
const [N, K] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);
function combi(a, b) {
  if (b === 1 || a - b === 1) return a;
  if (b === 0 || a === b) return 1;
  return combi(a - 1, b - 1) + combi(a - 1, b);
}
console.log(combi(N, K));

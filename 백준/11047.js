let fs = require("fs");
let [info, ...list] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
list = list.map((num) => +num);
list.sort((a, b) => b - a, 0);
const len = +info.split(" ")[0];
let total = +info.split(" ")[1];
let count = 0;
for (let i = 0; i < len; i++) {
  while (total / list[i] >= 1 && total > 0) {
    total -= list[i];
    count++;
  }
}
console.log(count);

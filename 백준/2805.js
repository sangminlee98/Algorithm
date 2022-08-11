let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const cnt = input.shift();
const need = +cnt.split(" ")[1];
input = input
  .join(" ")
  .split(" ")
  .map((num) => +num);
input.sort((a, b) => b - a, 0);

let start = 1;
let end = Math.max(...input);

while (start <= end) {
  let count = 0;
  let mid = parseInt((start + end) / 2);
  input.map((num) => {
    if (num > mid) count += num - mid;
  });
  if (count >= need) start = mid + 1;
  else end = mid - 1;
}

console.log(end);

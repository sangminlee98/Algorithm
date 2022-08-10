let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const cnt = input.shift();
const need = +cnt.split(" ")[1];
input = input.map((num) => +num);
input.sort((a, b) => b - a, 0);
let start = 1;
let end = input[0];

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let count = 0;
  for (let num of input) {
    count += parseInt(num / mid);
  }
  if (count >= need) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}
console.log(end);

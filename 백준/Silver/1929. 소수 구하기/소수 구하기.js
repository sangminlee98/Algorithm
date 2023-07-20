let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const start = +input[0];
const end = +input[1];
let answer = [];
let arr = Array.from({ length: end+1 }, () => true);
arr[0] = arr[1] = false;
for (let i = 2; i < arr.length; i++) {
  if (!arr[i]) continue;
  for (let k = i * 2; k < arr.length; k += i) {
    arr[k] = false;
  }
}
for (let i = start; i <= end; i++) {
  if (arr[i]) {
    answer.push(i);
  }
}
console.log(answer.join("\n"));

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((num) => +num);
input.shift();
const arr = Array.from({ length: 101 }, () => 0);
arr[1] = arr[2] = arr[3] = 1;
let answer = [];
input.map((num) => {
  for (let i = 4; i <= num; i++) {
    arr[i] = arr[i - 3] + arr[i - 2];
  }
  answer.push(arr[num]);
});
console.log(answer.join("\n"));

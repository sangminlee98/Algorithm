const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((num) => +num);
const maxNum = input.shift();
let count = 1;
let stack = [];
let answer = "";
for (let i = 0; i < maxNum; i++) {
  const num = input.shift();
  while (count <= num) {
    stack.push(count++);
    answer += "+ ";
  }
  const popNum = stack.pop();
  if (num === popNum) {
    answer += "- ";
  } else {
    answer = "NO";
    break;
  }
}
console.log(answer);

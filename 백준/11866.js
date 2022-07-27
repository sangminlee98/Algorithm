const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((item) => +item);
let len = input[0];
let gap = input[1];
let arr = Array.from({ length: len }, (_, i) => i + 1);
let answer = [];
let head = 0;
while (arr.length >= 1) {
  head = (head + gap - 1) % arr.length;
  answer.push(arr.splice(head % arr.length, 1));
}
console.log("<" + answer.join(", ") + ">");

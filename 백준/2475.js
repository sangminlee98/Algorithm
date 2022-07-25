const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((num) => +num);
let sum = 0;
input.forEach((num) => (sum += num * num));
console.log(sum % 10);

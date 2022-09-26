const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((num) => +num);
const arr = [1, 1, 2, 2, 2, 8];
let answer = [];
arr.map((item, index) => {
  answer.push(item - input[index]);
});
console.log(answer.join(" ").trim());

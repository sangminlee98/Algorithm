const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((num) => +num);
input.shift();
let stack = [];
for (let x of input) {
  if (x === 0) {
    stack.pop();
  } else {
    stack.push(x);
  }
}
console.log(stack.reduce((prev, curr) => prev + curr, 0));

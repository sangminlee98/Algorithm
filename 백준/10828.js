const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();

let stack = [];
let answer = [];
for (let x of input) {
  if (x.includes("push")) {
    const num = x.split(" ")[1];
    stack.push(num);
  }
  if (x === "top") {
    stack.length !== 0 ? answer.push(stack[stack.length - 1]) : answer.push(-1);
  }
  if (x === "size") {
    answer.push(stack.length);
  }
  if (x === "empty") {
    stack.length === 0 ? answer.push(1) : answer.push(0);
  }
  if (x === "pop") {
    stack.length === 0 ? answer.push(-1) : answer.push(stack.pop());
  }
}
console.log(answer.join("\n"));

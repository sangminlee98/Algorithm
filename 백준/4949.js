const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let answer = [];
for (let x of input) {
  if (x === ".") break;
  let stack = [];
  let flag = false;
  for (let s of x) {
    if (s === "(") stack.push("(");
    if (s === "[") stack.push("[");
    if (s === ")") {
      if (stack.pop() !== "(") {
        answer.push("no");
        flag = true;
        break;
      }
    }
    if (s === "]") {
      if (stack.pop() !== "[") {
        answer.push("no");
        flag = true;
        break;
      }
    }
  }
  if (flag) continue;
  if (stack.length === 0) answer.push("yes");
  else answer.push("no");
}

console.log(answer.join("\n"));

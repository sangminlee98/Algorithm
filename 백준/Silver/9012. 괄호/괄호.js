const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
input.shift();
let answer = [];
let stack;
for (let x of input) {
  stack = [];
  let flag = false;
  for (let s of x) {
    if (s === "(") stack.push("(");
    else {
      if (stack.length === 0) {
        flag = true;
        break;
      } else stack.pop();
    }
  }
  if (flag) {
    answer.push("NO");
    continue;
  }
  if (stack.length !== 0) answer.push("NO");
  else answer.push("YES");
}
console.log(answer.join("\n"));

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const arr = input[1].split(" ").map((num) => +num);
const sarr = [0];
arr.reduce((curr, prev) => {
  sarr.push(curr + prev);
  return curr + prev;
}, 0);
const answer = [];
for (let i = 2; i < input.length; i++) {
  const start = +input[i].split(" ")[0];
  const end = +input[i].split(" ")[1];
  answer.push(sarr[end] - sarr[start - 1]);
}
console.log(answer.join("\n"));

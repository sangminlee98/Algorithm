const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();

let ch = Array.from(Array(15), () => Array(15).fill(0));
for (let i = 0; i < ch[0].length; i++) {
  ch[0][i] = i;
}
function getValue(f, s) {
  let value = 0;
  for (let i = 1; i <= s; i++) {
    value += ch[f - 1][i];
  }
  return value;
}
function solution(f, s) {
  for (let i = 1; i <= f; i++) {
    for (k = 1; k <= s; k++) {
      ch[i][k] = getValue(i, k);
    }
  }
}

for (let i = 0; i < input.length; i += 2) {
  solution(input[i], input[i + 1]);
  console.log(ch[input[i]][input[i + 1]]);
}

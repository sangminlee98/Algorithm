const fs = require("fs");
const input = parseInt(fs.readFileSync("/dev/stdin").toString().trim());
let answer = 0;
let num = 665;
while (answer !== input) {
  num++;
  if ((num + "").includes("666")) answer++;
}
console.log(num);

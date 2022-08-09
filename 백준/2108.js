let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((num) => +num);
let len = input.shift();
input.sort((a, b) => a - b, 0);
let sum = 0;
for (const a of input) {
  sum += a;
}
console.log(Math.round(sum / len) === -0 ? 0 : Math.round(sum / len));
console.log(input[Math.floor(len / 2)]);
let chk = {};
input.map((num) => {
  if (!chk[num]) chk[num] = 1;
  else chk[num] = chk[num] + 1;
});
let arr = [];
for (let x in chk) {
  arr.push(chk[x]);
}
let values = [];
const max = Math.max(...arr);
for (let x in chk) {
  if (chk[x] === max) values.push(+x);
}
values.sort((a, b) => a - b, 0);
values.length > 1 ? console.log(+values[1]) : console.log(+values[0]);
console.log(input[len - 1] - input[0]);

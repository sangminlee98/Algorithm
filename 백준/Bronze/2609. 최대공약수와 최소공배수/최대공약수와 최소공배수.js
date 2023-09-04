const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ");
let a = input[0];
let b = input[1];
a = Number(a);
b = Number(b);
function uclid(a, b) {
  if (b === 0) return a;
  else return uclid(b, a % b);
}
console.log(uclid(a, b));
console.log((a * b) / uclid(a, b));

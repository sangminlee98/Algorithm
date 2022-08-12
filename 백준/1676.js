let fs = require("fs");
let input = +fs.readFileSync("/dev/stdin").toString().trim();
let num = 1;
while (input > 0) {
  num *= input;
  input--;
}
let arr = num.toString().split("");
let count = 0;
for (let i = arr.length - 1; i >= 0; i--) {
  if (arr[i] === "0") count++;
  else break;
}
console.log(count);

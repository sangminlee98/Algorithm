const fs = require("fs");
const input = +fs.readFileSync("/dev/stdin").toString().trim();

let arr = Array.from({ length: input + 1 }, () => 0);
arr[1] = 0;
for (let i = 2; i <= input; i++) {
  let tmp = [];
  if (i % 2 === 0) {
    tmp.push(arr[i / 2]);
  }
  if (i % 3 === 0) {
    tmp.push(arr[i / 3]);
  }
  tmp.push(arr[i - 1]);
  arr[i] = Math.min(...tmp) + 1;
}
console.log(arr[input]);

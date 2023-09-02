const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const arr = new Array(1001).fill(true);
arr[0] = arr[1] = false;
for (let i = 2; i <= 1001; i++) {
  if (!arr[i]) continue;
  for (let k = i * 2; k <= 1001; k += i) {
    arr[k] = false;
  }
}
let answer = 0;
const numArr = input[1].split(" ");
numArr.forEach((num) => {
  if (arr[+num]) answer++;
});
console.log(answer);

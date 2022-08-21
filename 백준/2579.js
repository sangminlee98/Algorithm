const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((num) => +num);
const count = input[0];
const arr = Array.from({ length: count + 1 }, () => 0);
arr[1] = input[1];
if (count >= 2) {
  arr[2] = input[1] + input[2];
}
if (count >= 3) {
  arr[3] = Math.max(input[1] + input[3], input[2] + input[3]);
}
if (count >= 4) {
  for (let i = 4; i <= count; i++) {
    arr[i] = Math.max(
      arr[i - 3] + input[i - 1] + input[i],
      arr[i - 2] + input[i]
    );
  }
}
console.log(arr[count]);

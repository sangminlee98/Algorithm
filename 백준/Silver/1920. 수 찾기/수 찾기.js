let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = parseInt(input.shift());
const arr1 = input
  .shift()
  .split(" ")
  .map((item) => +item);
const m = parseInt(input.shift());
const arr2 = input
  .shift()
  .split(" ")
  .map((item) => +item);
arr1.sort((a, b) => a - b, 0);
let result = [];
function bs(start, end, target) {
  let mid = Math.floor((start + end) / 2);
  if (start > end) {
    result.push(0);
    return;
  }
  if (target === arr1[mid]) {
    result.push(1);
    return;
  }
  if (target < arr1[mid]) bs(start, mid - 1, target);
  if (target > arr1[mid]) bs(mid + 1, end, target);
}
arr2.forEach((e) => bs(0, n - 1, e));
console.log(result.join("\n"));

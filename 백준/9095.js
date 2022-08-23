const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((num) => +num);
input.shift();

const arr = Array.from({ length: 11 }, () => 0);
arr[1] = 1;
arr[2] = 2;
arr[3] = 4;
for (let i = 4; i < 11; i++) {
  arr[i] = arr[i - 3] + arr[i - 2] + arr[i - 1];
}
answer = [];
input.map((num) => {
  answer.push(arr[num]);
});
console.log(answer.join("\n"));

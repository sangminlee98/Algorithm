const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let cnt = 0;

for (let i = 0; i < N; i++) {
  let sum = arr[i];
  let idx = i;
  while (sum < M && idx < N) {
    idx++;
    sum += arr[idx];
  }
  if (sum === M) cnt++;
}

console.log(cnt);
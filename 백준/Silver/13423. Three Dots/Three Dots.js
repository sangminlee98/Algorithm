const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const answer = [];
const arr = [];

for (let i = 2; i < input.length; i += 2) {
  arr.push(input[i].split(" ").map(Number));
}

for (let i = 0; i < arr.length; i++) {
  const tmp = arr[i].sort((a, b) => a - b);
  const n = tmp.length;
  let count = 0;

  for (let j = 1; j < n - 1; j++) {
    const mid = tmp[j];
    let left = j - 1;
    let right = j + 1;

    while (left >= 0 && right < n) {
      const leftDiff = mid - tmp[left];
      const rightDiff = tmp[right] - mid;

      if (leftDiff === rightDiff) {
        count++;
        left--;
        right++;
      } else if (leftDiff < rightDiff) {
        left--;
      } else {
        right++;
      }
    }
  }
  answer.push(count);
}

console.log(answer.join("\n"));
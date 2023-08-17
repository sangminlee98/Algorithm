const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const n = +input[0] / 2;
const paper = input.slice(1).map((v) => v.split(" ").map((vv) => +vv));

let count = [0, 0]; // 0과 1의 숫자 카운트
function recursion(n, y, x) {
  let numCount = 0;
  const num = paper[y][x];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (paper[y + i][x + j] === num) {
        numCount++;
      } else {
        break;
      }
    }
  }
  if (numCount === n * n) count[num]++;
  else {
    n = n / 2;
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        recursion(n, y + i * n, x + j * n);
      }
    }
  }
}

const check = paper[0][0];
let flag = false;
for (let i = 0; i < n * 2; i++) {
  for (let j = 0; j < n * 2; j++) {
    if (paper[i][j] !== check) {
      flag = true;
      break;
    }
  }
}
if (!flag) {
  count[check]++;
} else {
  recursion(n, 0, 0);
  recursion(n, n, 0);
  recursion(n, 0, n);
  recursion(n, n, n);
}
console.log(count.join("\n"));

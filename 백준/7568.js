const [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let info = [];
arr.forEach((item) => info.push(item.split(" ").map((item) => +item)));
let rankArr = Array.from({ length: n }, () => 1);
for (let i = 0; i < n; i++) {
  for (let k = 0; k < n; k++) {
    if (i === k) continue;
    if (info[i][0] < info[k][0] && info[i][1] < info[k][1]) rankArr[i] += 1;
  }
}
console.log(rankArr.join(" "));

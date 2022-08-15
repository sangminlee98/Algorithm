let fs = require("fs");
let [info, ...list] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const notHeardCnt = +info.split(" ")[0];
const notSeenCnt = +info.split(" ")[1];
const map = new Map();
for (let i = 0; i < notHeardCnt; i++) {
  map.set(list[i], 1);
}
for (let i = notHeardCnt; i < notHeardCnt + notSeenCnt; i++) {
  if (map.has(list[i])) {
    map.set(list[i], map.get(list[i]) + 1);
  } else {
    map.set(list[i], 1);
  }
}
let answer = [];
for (const [k, v] of map.entries()) {
  if (v === 2) answer.push(k);
}
answer.sort();
console.log(answer.length);
console.log(answer.join("\n"));

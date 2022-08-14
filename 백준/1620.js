let fs = require("fs");
let [info, ...dic] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let len = +info.split(" ")[0];
let map = new Map();

for (let i = 0; i < len; i++) {
  map.set(i + 1, dic[i]);
  map.set(dic[i], i + 1);
}
let answer = [];
for (let i = len; i < dic.length; i++) {
  if (!isNaN(+dic[i])) {
    answer.push(map.get(+dic[i]));
  } else {
    answer.push(map.get(dic[i]));
  }
}
console.log(answer.join("\n"));

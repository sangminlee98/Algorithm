const input = require("fs").readFileSync("/dev/stdin").toString().trim();
let obj = {};
for (let i = 0; i < input.length; i++) {
  const value = input[i].toUpperCase();
  if (!obj[value]) obj[value] = 1;
  else obj[value] += 1;
}
let maxArr = [];
for (let x in obj) {
  maxArr.push(obj[x]);
}
const max = Math.max(...maxArr);
let answer = [];
for (let x in obj) {
  if (max === obj[x]) answer.push(x);
}
if (answer.length > 1) console.log("?");
else console.log(answer[0]);

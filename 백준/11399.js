let fs = require("fs");
let [info, list] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
list = list.split(" ").map((item) => +item);
list.sort((a, b) => a - b, 0);
let prev = 0;
let arr = [];
list.map((i) => {
  prev += i;
  arr.push(prev);
});
let answer = arr.reduce((prev, curr) => prev + curr, 0);
console.log(answer);

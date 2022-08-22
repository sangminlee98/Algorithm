const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();
input.shift();
let problem = input.map((item) => item.split(" ").map((item) => +item));

const arr = [1];
let flag = false;
while (true) {
  flag = false;
  arr.map((chk) => {
    problem.map((item, idx) => {
      if (item.includes(chk)) {
        arr.push(...item.filter((a) => a !== chk));
        problem.splice(idx, 1);
        flag = true;
      }
    });
  });
  if (!flag) break;
}

const newArr = [...new Set(arr)];
console.log(newArr.length - 1);

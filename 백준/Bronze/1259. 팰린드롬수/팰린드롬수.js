let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.pop();
for (let x of input) {
  const arr = x.split("");
  const reverse = arr.reverse();
  if (x.split("").join("") === reverse.join("")) console.log("yes");
  else console.log("no");
}

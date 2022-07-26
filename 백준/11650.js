const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const len = +input.shift();
let position = [];
input.forEach((item) => position.push(item.split(" ").map((item) => +item)));
position.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});
console.log(position.join("\n").replaceAll(",", " ").trim());

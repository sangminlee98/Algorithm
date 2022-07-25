const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const len = input.shift();
let info = [];
input.map((item) => info.push(item.split(" ")));

info.sort((a, b) => {
  if (a[0] === b[0]) {
    return 0;
  } else return +a[0] - +b[0];
});

console.log(info.join("\n").replaceAll(",", " ").trim());

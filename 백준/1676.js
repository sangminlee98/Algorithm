let fs = require("fs");
let input = +fs.readFileSync("input.txt").toString().trim();
let arr = [];
while (input > 0) {
  arr.push(input);
  input--;
}

let count = 0;
arr.map((num) => {
  let a = num;
  while (a % 5 === 0) {
    a /= 5;
    count++;
  }
});
console.log(count);

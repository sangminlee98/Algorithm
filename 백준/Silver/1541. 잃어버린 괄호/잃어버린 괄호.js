let input = require("fs").readFileSync("/dev/stdin").toString().trim();

const value = input.split("-").map((num) =>
  num
    .split("+")
    .map((item) => Number(item))
    .reduce((prev, curr) => prev + curr, 0)
);
console.log(eval(value.join("-")));

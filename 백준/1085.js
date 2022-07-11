let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(" ");

function solution(input) {
  const x = input[0];
  const y = input[1];
  const w = input[2];
  const h = input[3];
  return Math.min(w-x,h-y,x,y);
};

console.log(solution(input));
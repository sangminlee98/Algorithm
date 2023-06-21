// let input = require('fs').readFileSync('./input.txt').toString();

// const arr = input.split('-');

// const sumArr = arr.map(a => a.split("+").reduce((a, b) => Number(a) + Number(b))).map(r => Number(r));
// let answer = sumArr[0];

// for(let i =1; i<sumArr.length; i++) {
//   answer -= sumArr[i];
// }

// console.log(answer);

let input = require('fs').readFileSync('/dev/stdin').toString();

let groups = input.split('-');
let answer = 0;

for(let i = 0; i < groups.length; i++) {
  let cur = groups[i].split("+").map(Number).reduce((a,b) => a+b);
  if(i === 0) answer += cur;
  else answer -= cur;
}

console.log(answer);
let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");

let answer = "";

const a = input[0];
const b = input[1];

for(let i=b.length-1; i>=0; i--) {
  answer += a*b[i]+"\n";  
}
answer += a*b+""

console.log(answer);
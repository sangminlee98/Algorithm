const input = require('fs').readFileSync('/dev/stdin').toString();
const num = Number(input);
let answer = 1;
let tmp= 1;
while(tmp<num) {
  tmp+=6*answer;
  answer++;
}
console.log(answer);
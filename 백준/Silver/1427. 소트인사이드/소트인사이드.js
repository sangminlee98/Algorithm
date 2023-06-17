let input = require('fs').readFileSync('/dev/stdin').toString();

let answer = "";

const count = Array(10).fill(0);

for(const n of input) {
  count[n]++;
}
for(let i = 9; i>=0; i--) {
  answer += `${i}`.repeat(count[i])
}
console.log(answer);
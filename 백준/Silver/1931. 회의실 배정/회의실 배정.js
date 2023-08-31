let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
const cnt = Number(input[0]);
const meetArr = [];

for(let i = 1; i<=cnt; i++) {
  meetArr.push(input[i].split(" ").map(Number));
}
meetArr.sort((a,b) => {
  if(a[1] === b[1]) return a[0] - b[0];
  else return a[1] - b[1];
})

let time = 0;
let count = 0;
for(let i = 0; i< meetArr.length; i++) {
  if(time > meetArr[i][0]) continue;
  count++;
  time = meetArr[i][1];
}

console.log(count)
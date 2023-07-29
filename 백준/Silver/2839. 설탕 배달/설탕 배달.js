const input = require('fs').readFileSync('/dev/stdin').toString();

let answer = 0;
let kg = Number.parseInt(input);

while(kg>=0) {
  if(kg%5 === 0) {
    console.log(kg/5 + answer);
    return;
  }
  else if(kg === 0) {
    console.log(answer);
    return;
  } else {
    kg -= 3;
    answer++;
  }
}

console.log(-1);
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

let answer = 0;
const num = Number(input);
for(let i=0; i<=num; i++) {
  let sum = i;
  const str = i.toString();
  for(let k=0; k<str.length; k++) {
    sum += Number(str[k]);
  };
  if(sum === num) {
    answer = i;
    break;
  }
};

console.log(answer);

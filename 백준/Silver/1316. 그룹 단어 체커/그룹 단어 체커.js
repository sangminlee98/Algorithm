let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");

function check(str) {
  let set = new Set(str[0]);
  for(let i=0; i<str.length-1; i++) {
    if(str[i] !== str[i+1]) {
      if(set.has(str[i+1])) return false;
      else set.add(str[i+1]);
    }
  }
  return true;
}

let answer = 0;

for(let i = 1; i<=Number(input[0]); i++) {
  if(check(input[i])) answer++;
}

console.log(answer);

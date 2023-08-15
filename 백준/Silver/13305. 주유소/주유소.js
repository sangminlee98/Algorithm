let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");

let answer = 0;
const countryDist = input[1].split(' ').map(Number);
const countryCost = input[2].split(' ').map(Number);

const newCost = [];
newCost.push(countryCost[0]);
for(let i=1; i<countryCost.length; i++) {
  if(countryCost[i]>countryCost[i-1]) {
    newCost.push(countryCost[i-1])
  } else {
    newCost.push(countryCost[i]);
  }
}

for(let i=0; i<countryDist.length; i++) {
  answer += newCost[i] * countryDist[i];
}

console.log(answer);
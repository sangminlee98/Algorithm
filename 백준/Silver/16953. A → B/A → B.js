let [A, B] = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(num => Number(num));

let count = 1;

function removeEndNum (numString) {
  const numArr = numString.split("");
  numArr.pop();
  return Number(numArr.join(""));
}

while(A <= B) {
  if(A === B) {
    console.log(count);
    return;
  } 
  else if(B%2 === 0) {
    B /= 2;
    count++;
  }
  else if(B%10 !== 1) {
    break;
  }
  else {
    B = removeEndNum(B.toString());
    count++;
  }
}

console.log(-1);
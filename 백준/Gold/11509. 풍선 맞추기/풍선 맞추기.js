let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");;
const balloonCnt = Number(input[0]);
const balloonArr = input[1].split(" ").map(Number);
let answer = 0;

const map = new Map();
for(let i=0; i<=Math.max(...balloonArr); i++) {
  map.set(i, 0);
}
for(let i=0; i<balloonArr.length; i++) {
  if(map.get(balloonArr[i]) === 0) {
    map.set(balloonArr[i]-1, map.get(balloonArr[i]-1) + 1);
  } else {
    map.set(balloonArr[i], map.get(balloonArr[i])-1);
    map.set(balloonArr[i]-1, map.get(balloonArr[i]-1)+1);
  }
}

map.forEach(v => answer += v)
console.log(answer)
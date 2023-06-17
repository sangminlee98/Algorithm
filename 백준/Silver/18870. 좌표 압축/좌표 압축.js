let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");

let answer = "";
const arr = input[1].split(" ").map(num => Number(num));

const numbers = [...new Set(arr)];
numbers.sort((a,b) => (a-b));

const map = new Map();
numbers.map((num,idx) => map.set(num, idx));

for(const x of arr) {
  answer += map.get(x) + " ";
}

console.log(answer.trim());
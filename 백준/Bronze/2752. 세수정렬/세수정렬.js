let input = require('fs').readFileSync('/dev/stdin').toString();

const arr = input.split(" ").map(num => Number(num));
const sorted = arr.sort((a,b) => a-b);
const answer = sorted.join(" ").trim();
console.log(answer)

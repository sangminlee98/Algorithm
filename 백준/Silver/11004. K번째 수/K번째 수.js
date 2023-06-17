let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");

const N = Number(input[0].split(" ")[0]);
const K = Number(input[0].split(" ")[1]);

const arr = input[1].split(" ").map(num => Number(num));

console.log(arr.sort((a,b) => a-b)[K-1]);
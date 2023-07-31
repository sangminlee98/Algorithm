const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(num => +num);
input.shift();

let arr = Array.from(Array(41), () => Array(2).fill(0));

arr[0][0] = 1;
arr[0][1] = 0;
arr[1][0] = 0;
arr[1][1] = 1;

const countZeroAndOne = (n) => {
  if(n === 0) return '1 0';
  else if(n === 1) return '0 1';
  else {
    for(let i =2; i<=n; i++) {
      arr[i][0] = arr[i-1][0] + arr[i-2][0];
      arr[i][1] = arr[i-1][1] + arr[i-2][1];
    }
    return `${arr[n][0]} ${arr[n][1]}`
  }
};

let answer = [];
input.map(item => {
  answer.push(countZeroAndOne(item));
})
console.log(answer.join("\n"));

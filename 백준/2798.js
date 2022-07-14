let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n");
const maxNum = Number(input[0].split(' ')[1]);
const numbers = input[1].split(' ').map(num => Number(num));
let ch = Array.from({length: numbers.length}, () => 0);
let max = 0;
function DFS(L, sum) {
  if(sum>maxNum) return;
  if(L===3) {
    max = Math.max(max, sum);
  } else {
    for(let i=0; i<numbers.length; i++) {
      if(ch[i]===0) {
        ch[i] = 1;
        DFS(L+1, sum+numbers[i]);
        ch[i] = 0;
      }
    }
  }
}
DFS(0, 0);
console.log(max);
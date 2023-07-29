let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");

const testCase = Number(input[0]);

let count = 0;

let line = 1;
for(let tc = 0; tc < testCase; tc++) {
  let n = Number(input[line]);
  
  const arr = [];
  for(let i = line+1; i<=line+n; i++) {
    arr.push(input[i].split(" ").map(Number));
  }
  arr.sort((a,b) => a[0] - b[0]);

  let minValue = Number.MAX_SAFE_INTEGER;
  for(let [x, y] of arr) {
    if(y < minValue) {
      count++;
      minValue = y;
    }
  }
  console.log(count);

  count = 0;
  line += n + 1;
}

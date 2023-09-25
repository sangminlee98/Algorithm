let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

let N = input[0]; // 5
let K = input[1]; // 3

let sum = 0;

for(let i=0; i<K+1; i++) {
  sum += i;
}

if(sum>N) console.log(-1);
else {
  N -= sum;
  N%K === 0 ? console.log(K-1) : console.log(K);
}



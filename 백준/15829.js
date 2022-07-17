const fs = require('fs');
const [n, str] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const r= 31;
const M = 1234567891;
let sum =0;
let ri=1;
for(let i=0; i<n; i++) {
  sum += (str[i].charCodeAt()-96)*ri;
  ri *= r;
  ri %= M;
  sum %= M;
}
console.log(sum);
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
for(let i=1; i<input.length; i++) {
  const arr = input[i].split(' ').map(num => Number(num));
  const y = arr[2]%arr[0]===0 ? arr[0] : arr[2]%arr[0];
  let x =arr[2]%arr[0]===0 ? Math.floor(arr[2]/arr[0]) : (Math.floor(arr[2]/arr[0])+1);
  if(x<10) {x = '0'+x;}
  console.log(y+''+x);
};

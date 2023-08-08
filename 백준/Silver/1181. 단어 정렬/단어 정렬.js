const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = [...input];
arr.shift();
const set = new Set(arr);
arr = [...set];
const arr2 = arr.sort((a,b) => {
  if(a.length < b.length) return -1;
  else if(a.length === b.length) {
    for(let i=0; i<a.length; i++) {
      if(a.charCodeAt(i)<b.charCodeAt(i)) {
        return -1
      } else if(a.charCodeAt(i)>b.charCodeAt(i)) {
        return 1;
      } else continue;
    }
  } 
})
arr2.map(item => {
  console.log(item);
});
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();
const setArr = new Set(input);
let newArr = [...setArr];
newArr.sort((a, b) => {
  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      if (a[i].charCodeAt() < b[i].charCodeAt()) {
        return -1;
      } else if (a[i].charCodeAt() > b[i].charCodeAt()) {
        return 1;
      } else continue;
    }
  } else {
    return a.length - b.length;
  }
}, 0);

newArr.forEach((num) => console.log(num));

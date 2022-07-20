let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const A = +input[0];
const B = +input[1];
const V = +input[2];

let x = Math.floor((V - A) / (A - B));
let y = (V - A) % (A - B);
if (y === 0) console.log(x + 1);
else console.log(x + 2);

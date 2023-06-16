let input = require('fs').readFileSync('/dev/stdin').toString();

const score = Number(input);
let answer = "";

switch(parseInt(score/10)) {
  case 10:
  case 9:
    answer = 'A';
    break;
  case 8 :
    answer = "B";
    break;
  case 7 :
    answer = "C";
    break;
  case 6 :
    answer = "D";
    break;
  default :
    answer = "F";
}
console.log(answer);


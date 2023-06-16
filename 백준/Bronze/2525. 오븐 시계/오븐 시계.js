let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");

let hour = Number(input[0].split(" ")[0]);
let minute = Number(input[0].split(" ")[1]);
const cookTime = Number(input[1]);

if(minute + cookTime >= 60) {
  const minutes = (minute+cookTime)%60;
  hour += Math.floor((minute+cookTime)/60);
  minute =(minute+cookTime)%60 
  if(hour>=24) hour -= 24;
} else {
  minute += cookTime;
}

console.log(hour+" "+minute)


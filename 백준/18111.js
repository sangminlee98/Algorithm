let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let inven = +input.shift().split(" ")[2];
let ground = input.map((a) => a.split(" "));
ground = ground.map((span) => span.map((h) => +h));
let arr = [];
ground.map((span) => span.map((h) => arr.push(h)));
const maxHeight = Math.max(...arr);
const minHeight = Math.min(...arr);

let answer = [];
for (let a = minHeight; a <= maxHeight; a++) {
  let time = 0;
  let blocks = inven;
  for (let i = 0; i < ground.length; i++) {
    for (let j = 0; j < ground[i].length; j++) {
      if (ground[i][j] < a) {
        let needBlock = a - ground[i][j];
        blocks -= needBlock;
        time += needBlock;
      } else if (ground[i][j] > a) {
        let restBlock = ground[i][j] - a;
        blocks += restBlock;
        time += 2 * restBlock;
      } else continue;
    }
  }
  if (blocks < 0) continue;
  else {
    answer.push({ time, height: a });
  }
}
let min = { time: Number.MAX_SAFE_INTEGER, height: Number.MIN_SAFE_INTEGER };
answer.map((i) => {
  if (i.time < min.time) min = i;
  else if (i.time === min.time) min = i.height > min.height ? i : min;
});
console.log(min.time + " " + min.height);

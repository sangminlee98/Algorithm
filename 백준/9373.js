const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
+input.shift();
let i = 0;
let answer = [];
while (i < input.length) {
  let map = new Map();
  let count = +input[i];
  let value;
  let key;
  for (let k = i + 1; k <= i + count; k++) {
    value = input[k].split(" ")[0];
    key = input[k].split(" ")[1];
    if (map.has(key)) {
      map.set(key, map.get(key) + 1);
    } else {
      map.set(key, 1);
    }
  }
  let caseCount = 1;
  for (const a of map.values()) {
    caseCount *= a + 1;
  }
  answer.push(caseCount - 1);
  i += count + 1;
}
console.log(answer.join("\n"));

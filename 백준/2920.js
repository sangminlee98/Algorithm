const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((num) => +num);

let answer = "";
for (let i = 1; i < input.length; i++) {
  if (i === input.length - 1) {
    if (input[i] === 1) answer = "descending";
    else if (input[i] === 8) answer = "ascending";
  }
  if (input[i] - input[i - 1] === 1 || input[i] - input[i - 1] === -1) continue;
  else break;
}

if (answer !== "ascending" && answer !== "descending") console.log("mixed");
else {
  console.log(answer);
}

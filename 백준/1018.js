const [n, m, ...board] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/);

const whiteBoard = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];
const blackBoard = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

function checkWhiteBoard(x, y) {
  let count = 0;
  for (let i = x; i < x + 8; i++) {
    for (let j = y; j < y + 8; j++) {
      if (board[i][j] !== whiteBoard[i - x][j - y]) count++;
    }
  }
  return count;
}
function checkBlackBoard(x, y) {
  let count = 0;
  for (let i = x; i < x + 8; i++) {
    for (let j = y; j < y + 8; j++) {
      if (board[i][j] !== blackBoard[i - x][j - y]) count++;
    }
  }
  return count;
}
let answer = [];
for (let i = 0; i + 7 < n; i++) {
  for (let j = 0; j + 7 < m; j++) {
    answer.push(checkWhiteBoard(i, j));
    answer.push(checkBlackBoard(i, j));
  }
}
console.log(Math.min(...answer));

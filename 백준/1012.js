const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const testcase = +input.shift();
let answerArr = [];
for (let t = 0; t < testcase; t++) {
  const m = +input[0].split(" ")[0];
  const n = +input[0].split(" ")[1];
  const count = +input[0].split(" ")[2];
  input.shift();

  const farm = new Array(m).fill(0).map(() => new Array(n).fill(0));

  const dx = [0, 1, 0, -1];
  const dy = [-1, 0, 1, 0];

  for (let i = 0; i < count; i++) {
    const x = input[i].split(" ")[0];
    const y = input[i].split(" ")[1];
    farm[x][y] = 1;
  }

  function DFS(x, y) {
    farm[x][y] = 0;
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx >= 0 && nx < m && ny >= 0 && ny < n && farm[nx][ny] === 1) {
        DFS(nx, ny);
      }
    }
  }
  let answer = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (farm[i][j] === 1) {
        answer++;
        DFS(i, j);
      }
    }
  }

  answerArr.push(answer);
  input.splice(0, count);
}
console.log(answerArr.join("\n"));

let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
const [N, M] = input[0].split(" ").map(num => Number(num));
const map = [];
for(let i = 1; i <= N; i++) {
  map.push(input[i].split("").map(Number));
} 
const check = Array.from({length: N}, () => Array(M).fill(0));

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

function bfs(x, y) {
  const queue = [];
  queue.push([x, y]);
  check[x][y] = 1;
  while(queue.length) {
    const [x, y] = queue.shift();
    for(let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if(nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
      if(map[nx][ny] === 1 && check[nx][ny] === 0) {
        check[nx][ny] = check[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
}

bfs(0, 0);
console.log(check[N - 1][M - 1]);
let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
const N = Number(input[0]);
const map = [];
const answer_arr = [];
for(let i = 1; i <= N; i++) {
  map.push(input[i].split("").map(Number));
} 

const visited = Array.from({length: N}, () => Array(N).fill(false));

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const bfs = (x,y) => {
  const queue = [];
  queue.push([x,y]);
  visited[x][y] = true;
  let cnt = 1;
  while(queue.length) {
    const [x,y] = queue.shift();
    for(let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if(nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
      if(visited[nx][ny]) continue;
      if(map[nx][ny] === 0) continue;
      queue.push([nx,ny]);
      visited[nx][ny] = true;
      cnt++;
    }
  }
  answer_arr.push(cnt);
}

for(let i = 0; i < N; i++) {
  for(let j = 0; j < N; j++) {
    if(map[i][j] === 1 && !visited[i][j]) {
      bfs(i,j);
    }
  }
}
answer_arr.sort((a,b) => a-b).join("\n")
answer_arr.unshift(answer_arr.length);
console.log(answer_arr.join("\n"));
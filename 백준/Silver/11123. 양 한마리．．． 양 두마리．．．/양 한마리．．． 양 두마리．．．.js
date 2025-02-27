const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function bfs(x, y, visited, map) {
  const queue = [];
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  queue.push([x, y]);

  while (queue.length) {
    const [currX, currY] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const newX = currX + dx[i];
      const newY = currY + dy[i];
      if (newX >= 0 && newX < map[0].length && newY >= 0 && newY < map.length) {
        if (map[newY][newX] === "#" && !visited[newY][newX]) {
          visited[newY][newX] = true;
          queue.push([newX, newY]);
        }
      }
    }
  }
}

function solution(h, w, map) {
  const visited = Array.from({ length: h }, () => Array(w).fill(false));
  let count = 0;

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (map[i][j] === "#" && !visited[i][j]) {
        bfs(j, i, visited, map);
        count++;
      }
    }
  }

  return count;
}

const tmp = [];
let T = 1;

while (true) {
  if (T >= input.length) break;
  const [w, h] = input[T].split(" ").map(Number);
  const map = [];
  for (let i = T + 1; i <= T + w; i++) {
    map.push(input[i]);
  }
  tmp.push([w, h, map]);
  T += w + 1;
}

const answer = [];

for (const t of tmp) {
  answer.push(solution(...t));
}

console.log(answer.join("\n"));
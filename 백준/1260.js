let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const v = +input[0].split(" ")[0];
const startNum = +input[0].split(" ")[2];
let dfs_arr = [];
let bfs_arr = [];
input.shift();
input = input.sort();
const graph = Array.from(Array(v + 1), () => Array(v + 1).fill(0));
for (let x of input) {
  const [a, b] = x.split(" ").map((num) => +num);
  graph[a][b] = 1;
  graph[b][a] = 1;
}
const DFSchk = Array.from({ length: v + 1 }, () => 0);
const BFSchk = Array.from({ length: v + 1 }, () => 0);

function DFS(L) {
  dfs_arr.push(L);
  DFSchk[L] = 1;
  for (let i = 1; i <= v; i++) {
    if (graph[L][i] === 1 && DFSchk[i] !== 1) {
      DFS(i);
    }
  }
}
function BFS(L) {
  const queue = [];
  queue.push(L);
  bfs_arr.push(L);
  while (queue.length > 0) {
    let num = queue.shift();
    BFSchk[num] = 1;
    for (let i = 1; i <= v; i++) {
      if (graph[num][i] === 1 && BFSchk[i] !== 1) {
        queue.push(i);
        BFSchk[i] = 1;
        bfs_arr.push(i);
      }
    }
  }
}
DFS(startNum);
BFS(startNum);
console.log(dfs_arr.join(" "));
console.log(bfs_arr.join(" "));

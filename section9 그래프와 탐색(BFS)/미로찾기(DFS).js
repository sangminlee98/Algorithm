function solution(board){  
  let answer=0;
  const dx = [0,1,0,-1];
  const dy = [-1,0,1,0]; // 시계방향 위, 오른쪽, 아래, 왼쪽
  function DFS(x,y) {
    console.log(x,y);
    if(x===6 && y===6) answer++;
    else {
      for(let i=0; i<4; i++) {
        let nx = dx[i] + x;
        let ny = dy[i] + y;
        if(nx>=0 && nx<=6 && ny>=0 && ny<=6 && board[nx][ny] === 0) {
          board[nx][ny] = 1;
          DFS(nx,ny);
          board[nx][ny] = 0;
        }
      }
    }
  }
  board[0][0] = 1;
  DFS(0,0);
  return answer;
}

let arr=[[0, 0, 0, 0, 0, 0, 0], 
         [0, 1, 1, 1, 1, 1, 0],
         [0, 0, 0, 1, 0, 0, 0],
         [1, 1, 0, 1, 0, 1, 1],
         [1, 1, 0, 0, 0, 0, 1],
         [1, 1, 0, 1, 1, 0, 0],
         [1, 0, 0, 0, 0, 0, 0]];

console.log(solution(arr));
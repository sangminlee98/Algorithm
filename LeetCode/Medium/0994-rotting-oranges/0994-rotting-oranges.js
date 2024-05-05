/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  let answer = 0;
  const m = grid.length;
  const n = grid[0].length;
  const dx = [1, 0 , -1, 0];
  const dy = [0, 1 , 0, -1];
  const queue = [];

  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(grid[i][j] === 2) queue.push([i, j, 0]);
    }
  };

  while(queue.length > 0) {
    const [x, y, time] = queue.shift();
    for(let i = 0; i < 4; i++) {
      const X = x + dx[i];
      const Y = y + dy[i];

      if(X >= 0 && X < m && Y >= 0 && Y < n) {
        if(grid[X][Y] === 1) {
          grid[X][Y] = 2;
          queue.push([X, Y, time + 1]);
        };
      }
    }
    answer = time;
  };

  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(grid[i][j] === 1) return -1;
    }
  };

  return answer;
};
/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
  const m = maze.length;
  const n = maze[0].length;
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  const queue = [[...entrance, 0]];
  maze[entrance[0]][entrance[1]] = '+';
  
  while(queue.length > 0) {
    const [x, y, currentCost] = queue.shift();
    for(let i = 0; i < 4; i++) {
      const X = x + dx[i];
      const Y = y + dy[i];
      if(X >= 0 && Y >= 0 && X < m && Y < n && maze[X][Y] === '.') {
        if(X === 0 || Y === 0 || X === m-1 || Y === n-1) return currentCost + 1;
        maze[X][Y] = "+";
        queue.push([X, Y, currentCost + 1])
      }
    }
  }
  return -1;
};
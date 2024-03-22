/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
  const map = new Map();
  tasks.forEach(task => {
    if(!map.get(task)) {
      map.set(task, 1);
    } else {
      map.set(task, map.get(task)+1);
    }
  });
  let answer = 0;
  for(const [_, value] of map) {
    if(value < 2) return -1;
    answer += Math.ceil(value/3);
  }
  return answer;
};
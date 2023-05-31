function solution(score) {
  let answer = 0;
  let cnt = 0;
  for (let i of score) {
    if (i === 1) {
      cnt++;
      answer += cnt;
    } else cnt = 0;
  }
  return answer;
}

console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));

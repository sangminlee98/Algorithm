function solution(score) {
  const answer = [];
  const map = new Map();
  const originScore = [...score];
  score.sort((a, b) => b - a);

  for (let i = 0; i < score.length; i++) {
    map.set(score[i], i + 1);
  }
  for (let i = 0; i < score.length; i++) {
    answer.push(map.get(originScore[i]));
  }
  return answer.join(" ");
}

console.log(solution([87, 89, 92, 100, 76]));

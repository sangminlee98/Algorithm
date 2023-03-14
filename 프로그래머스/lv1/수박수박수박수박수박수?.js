function solution(s) {
  let answer = "";
  for (let i = 1; i <= s; i++) {
    if (i % 2 === 1) {
      answer += "수";
    } else {
      answer += "박";
    }
  }
  return answer;
}

console.log(solution(3));

function solution(str, ch) {
  const answer = [];
  const idxArr = [];
  let idx = str.indexOf(ch);
  while (idx != -1) {
    idxArr.push(idx);
    idx = str.indexOf(ch, idx + 1);
  }
  for (let i = 0; i < str.length; i++) {
    answer.push(Math.min(...idxArr.map((idx) => Math.abs(i - idx))));
  }
  return answer.join(" ");
}

console.log(solution("teachermode", "e"));

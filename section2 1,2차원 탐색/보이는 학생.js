function solution(students) {
  let answer = 0;
  let cnt = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i] > cnt) {
      answer++;
      cnt = students[i];
    }
  }
  return answer;
}

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]));

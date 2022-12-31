function solution(seoul) {
  let answer;
  seoul.map((v, i) => (v === "Kim" ? (answer = i) : null));
  return `김서방은 ${answer}에 있다`;
}

console.log(solution(["Jane", "Kim"]));

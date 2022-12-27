function solution(s) {
  return s.length % 2
    ? s[Math.floor(s.length / 2)]
    : s.substring(s.length / 2 - 1, s.length / 2 - 1 + 2);
}

console.log(solution("abc"));

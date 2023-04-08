function solution(s) {
  if (s.length < 2 || s[0] === ")") return false;
  let stack = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack++;
    } else {
      if (stack <= 0) return false;
      stack--;
    }
  }
  return stack === 0 ? true : false;
}

console.log(solution("(()("));

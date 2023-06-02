function solution(str) {
  const upper = str.toUpperCase();
  const strArr = upper.split("");
  return upper === strArr.reverse().join("") ? "YES" : "NO";
}

console.log(solution("gooG"));

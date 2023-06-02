function solution(str) {
  return parseInt(str.match(/\d/g).join(""));
}

console.log(solution("g0en2T0s8eSoft"));

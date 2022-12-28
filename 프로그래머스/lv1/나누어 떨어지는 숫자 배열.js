function solution(arr, divisor) {
  let answer = [];
  answer = arr.filter((v) => !(v % divisor));
  if (answer.length === 0) answer.push(-1);
  return answer.sort((a, b) => a - b, 0);
}

console.log(solution([10, 9, 7, 5], 5));

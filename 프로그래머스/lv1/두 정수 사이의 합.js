function solution(a, b) {
  let answer = 0;
  const arr = [a, b].sort((a, b) => a - b, 0);
  for (let i = arr[0]; i <= arr[1]; i++) {
    answer += i;
  }
  return answer;
}

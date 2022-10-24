function solution(n) {
  if (n === 0) return 0;
  let answer = 0;
  const arr = [1];
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) arr.push(i);
  }
  for (const a of arr) {
    answer += a;
  }
  return answer;
}
console.log(solution(0));

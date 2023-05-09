function solution(n) {
  let answer = [];
  const str = n.toString();
  // split을 쓰면 배열로 만들어진다
  for (let num of str) {
    answer.push(parseInt(num));
  }
  return answer.reverse();
}

console.log(solution(12345));

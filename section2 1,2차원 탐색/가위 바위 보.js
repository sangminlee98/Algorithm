function solution(A, B) {
  const answer = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] === B[i]) answer.push("D");
    else if (
      (A[i] === 1 && B[i] === 3) ||
      (A[i] === 2 && B[i] === 1) ||
      (A[i] === 3 && B[i] === 2)
    )
      answer.push("A");
    else answer.push("B");
  }
  return answer.join("\n");
}

console.log(solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));

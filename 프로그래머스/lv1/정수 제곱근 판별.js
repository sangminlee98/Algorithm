function solution(n) {
  const sq = Math.sqrt(n);
  return sq % 1 === 0 ? Math.pow(sq + 1, 2) : -1;
}

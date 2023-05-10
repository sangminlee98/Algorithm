function solution(n) {
  return (
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("") * 1
  );
}

console.log(solution(118372));

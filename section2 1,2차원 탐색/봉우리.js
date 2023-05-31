function solution(arr) {
  let answer = 0;
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let k = 0; k < len; k++) {
      const data = arr[i][k];
      const up = i === 0 ? 0 : arr[i - 1][k];
      const down = i === len - 1 ? 0 : arr[i + 1][k];
      const left = k === 0 ? 0 : arr[i][k - 1];
      const right = k === len - 1 ? 0 : arr[i][k + 1];

      if (Math.max(data, up, down, left, right) === data) answer++;
    }
  }
  return answer;
}

console.log(
  solution([
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
);

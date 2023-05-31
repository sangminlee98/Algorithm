function solution(arr) {
  let xmax = 0,
    ymax = 0,
    cmax1 = 0,
    cmax2 = 0;
  const len = arr.length;

  // 각 행 최대값
  for (let i = 0; i < len; i++) {
    let cnt = 0;
    for (let k = 0; k < len; k++) {
      cnt += arr[i][k];
    }
    if (cnt > xmax) xmax = cnt;
  }

  // 각 열 최대값
  for (let i = 0; i < len; i++) {
    let cnt = 0;
    for (let k = 0; k < len; k++) {
      cnt += arr[k][i];
    }
    if (cnt > ymax) ymax = cnt;
  }

  // 왼쪽 대각선 최대값
  for (let i = 0; i < len; i++) {
    cmax1 += arr[i][i];
  }

  // 오른쪽 대각선 최대값
  for (let i = len - 1; i > -1; i--) {
    cmax2 += arr[i][i];
  }

  return Math.max(xmax, ymax, cmax1, cmax2);
}

console.log(
  solution([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);

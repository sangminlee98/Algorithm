function solution(sizes) {
  let w = 0;
  let h = 0;
  sizes.forEach((arr) => {
    const [a, b] = arr.sort((a, b) => a - b);
    w = Math.max(a, w);
    h = Math.max(b, h);
  });
  // for (let i = 0; i < sizes.length; i++) {
  //   numMax = Math.max(sizes[i][0], sizes[i][1]);
  //   numMin = Math.min(sizes[i][0], sizes[i][1]);
  //   w = Math.max(w, numMax);
  //   h = Math.max(h, numMin);
  // }
  return w * h;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);

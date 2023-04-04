function solution(absolutes, signs) {
  let sum = 0;
  absolutes.map((v, i) => {
    if (signs[i]) {
      sum += absolutes[i];
    } else {
      sum -= absolutes[i];
    }
  });
  return sum;
}

console.log(solution([4, 7, 12], [true, false, true]));

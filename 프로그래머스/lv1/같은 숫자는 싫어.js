function solution(arr) {
  const newArr = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) continue;
    newArr.push(arr[i]);
  }
  return newArr;
}

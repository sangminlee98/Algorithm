const input = +require("fs").readFileSync("/dev/stdin").toString().trim();
const kg = [3, 5];
const arr = Array.from({ length: input + 1 }, () => 0);
arr[3] = 1;
arr[5] = 1;
for (let x of kg) {
  for (let i = x; i < arr.length; i++) {
    if (arr[i - x] > 0) {
      arr[i] = arr[i - x] + 1;
    }
  }
}
console.log(arr[input] === 0 ? -1 : arr[input]);

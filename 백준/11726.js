const input = +require("fs").readFileSync("/dev/stdin").toString().trim();
const arr = [];
arr[0] = 0;
arr[1] = 1;
arr[2] = 2;

for (let i = 3; i <= input; i++) {
  arr[i] = (arr[i - 1] + arr[i - 2]) % 10007;
}
console.log(arr[input]);

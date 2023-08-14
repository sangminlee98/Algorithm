const input = +require("fs").readFileSync("/dev/stdin").toString().trim();

const arr = [0];
arr[1] = 1;
arr[2] = 2;
arr[3] = 3;

for (let i = 4; i <= input; i++) {
  const candi = [];
  const root = Math.floor(Math.sqrt(i));
  for (let k = root; k > 0; k--) {
    candi.push(arr[i - Math.pow(k, 2)] + 1);
  }
  arr[i] = Math.min(...candi);
}

console.log(arr[input]);

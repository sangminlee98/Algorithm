const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const t = +input[0];

for (let i = 1; i <= t; i++) {
  const fibo = generateFibonacci(+input[i]);
  const result = findMinimumCases(fibo, +input[i]);
  result.sort((a, b) => a - b);
  console.log(...result);
}

// 입력으로 받은 수보다 작거나 같은 피보나치 수열을 만들어주는 함수
function generateFibonacci(num) {
  const fibo = [0, 1]; // 피보나치 기본 값인 0,1로 배열 초기화

  while (fibo[fibo.length - 1] <= num) {
    const nextFibo = fibo[fibo.length - 1] + fibo[fibo.length - 2];
    fibo.push(nextFibo);
  }
  return fibo.slice(0, fibo.length - 1); // 마지막 값 빼주기 (num보다 크므로)
}

// 피보나치 수열과 입력으로 받은 수를 이용하여 최소 개수의 피보나치 수열을 구하는 함수
function findMinimumCases(array, num) {
  let currentNum = num;
  let resultArray = [];

  // 피보나치 수열의 뒤에서부터 탐색 (그리디 알고리즘)
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] <= currentNum) {
      resultArray.push(array[i]);
      currentNum -= array[i];
      if (currentNum === 0) {
        break;
      }
    }
  }

  return resultArray;
}
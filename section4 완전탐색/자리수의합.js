// const solution = (arr) => {
//   let answer, max=Number.MIN_SAFE_INTEGER;
//   arr.forEach(num => {
//     let sNum = num.toString();
//     let tmp = sNum.split("");
//     const sum = tmp.reduce((prev, curr) => {
//       return Number(prev)+Number(curr);
//     },0);
//     if(sum>max) {
//       max = sum;
//       answer = num;
//     } else if(sum == max) {
//       answer = Math.max(answer, num);
//     }
//   })
//   return answer;
// }

// let arr=[128, 460, 603, 40, 521, 137, 123];
// console.log(solution(arr));

// function solution(arr) {
//   let max = Number.MIN_SAFE_INTEGER;
//   let maxNum = Number.MIN_SAFE_INTEGER;
//   for (let num of arr) {
//     const origin = num;
//     let cnt = 0;
//     while (num >= 10) {
//       cnt += num % 10;
//       num = Math.floor(num / 10);
//     }
//     cnt += num;
//     if (cnt > max) {
//       max = cnt;
//       maxNum = origin;
//     } else if (cnt === max) {
//       maxNum = Math.max(maxNum, origin);
//     }
//   }
//   return maxNum;
// }

// console.log(solution([128, 460, 603, 40, 521, 137, 123]));

function solution(arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let num of arr) {
    const cnt = num
      .toString()
      .split("")
      .reduce((acc, curr) => {
        return Number(acc) + Number(curr);
      }, 0);
    if (cnt > max) {
      max = cnt;
      answer = num;
    } else if (cnt === max) {
      answer = Math.max(answer, num);
    }
  }
  return answer;
}

console.log(solution([128, 460, 603, 40, 521, 137, 123]));

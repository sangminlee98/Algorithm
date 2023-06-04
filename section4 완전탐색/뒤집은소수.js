// const isPrime = (num) => {
//   if(num === 1) return false;
//   for(let i=2; i<parseInt(Math.sqrt(num)); i++) {
//     if(num%i === 0) return false;
//   }
//   return true;
// }

// const solution = (arr) => {
//   let answer=[];
//   for(let x of arr) {
//     let res = 0;
//     while(x>0) {
//       let t = x%10;
//       res = res*10 + t;
//       x = parseInt(x/10);
//     }
//     if(isPrime(res)) answer.push(res);
//   }
//   return answer;
// }

// let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
// console.log(solution(arr));

function solution(nums) {
  const answer = [];
  let flag;
  for (let num of nums) {
    flag = true;
    const reverseNum = parseInt(num.toString().split("").reverse().join(""));
    if (!reverseNum || reverseNum === 1) flag = false;
    for (let i = 2; i < Math.sqrt(reverseNum); i++) {
      if (reverseNum % i === 0) flag = false;
    }
    if (flag) answer.push(reverseNum);
    flag = true;
  }
  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));

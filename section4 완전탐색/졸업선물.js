// function solution(m, product){
//   let answer=0;
//   const student = product.length;
//   let max = Number.MIN_SAFE_INTEGER;
//   let maxIdx = 0;
//   for(let i=0; i< student; i++) {
//     if(product[i][0]>max) {
//       max = product[i][0];
//       maxIdx = i;
//     }
//   };
//   product[maxIdx][0] = max/2;

//   let cost = [];
//   for(let i=0; i<student; i++) {
//     cost.push(product[i][0] + product[i][1]);
//   };
//   cost.sort((a,b) => a-b);
//   let totalCost = 0;
//   for(let i=0; i<student; i++) {
//     if(totalCost<m) {
//       totalCost += cost[i];
//       answer++;
//     } else {
//       break;
//     }
//   }
//   return answer;
// }

// let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
// console.log(solution(28, arr));

function solution(totalPrice, info) {
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < info.length; i++) {
    let count = 0;
    let total = 0;
    info[i][0] /= 2;
    const sortedArr = info.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

    for (let k = 0; k < sortedArr.length; k++) {
      if (total + sortedArr[k][0] + sortedArr[k][1] <= totalPrice) {
        total += sortedArr[k][0] + sortedArr[k][1];
        count++;
      } else {
        break;
      }
    }

    info[i][0] *= 2;
    max = Math.max(max, count);
  }
  return max;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));

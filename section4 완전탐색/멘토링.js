// function solution(test){
//   const n = test[0].length;
//   const m = test.length;
//   let answer=0;
//   let tmp = [];
//   for(let i=1; i<=n; i++) {
//     for(let j=1; j<=n; j++) {
//       let cnt = 0;
//       for(let k=0; k<m; k++) {
//         let pi=pj=0;
//         for(let s=0; s<n; s++) {
//           if(test[k][s] === i) pi = s;
//           if(test[k][s] === j) pj = s;
//         }
//         if(pi<pj) cnt++;
//       }
//       if(cnt === m) {
//         tmp.push([i,j]);
//         answer++;
//       }
//     }
//   }
//   console.log(tmp);
//   return answer;
// }

// let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
// console.log(solution(arr));

function solution(arr) {
  let answer = 0;
  const testLen = arr.length;
  const studentLen = arr[0].length;

  const map = new Map();

  for (let i = 0; i < testLen; i++) {
    for (let k = 0; k < studentLen - 1; k++) {
      for (let m = k + 1; m < studentLen; m++) {
        if (map.has(arr[i][k] + "" + arr[i][m])) {
          map.set(
            arr[i][k] + "" + arr[i][m],
            map.get(arr[i][k] + "" + arr[i][m]) + 1
          );
        } else {
          map.set(arr[i][k] + "" + arr[i][m], 1);
        }
      }
    }
  }
  for (const [_, value] of map) {
    if (value === testLen) answer++;
  }
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));

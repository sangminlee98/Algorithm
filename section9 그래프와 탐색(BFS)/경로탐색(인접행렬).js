// function solution(n, arr){  
//   let answer=0;
//   let tmp = Array.from({length: n+1}, () => 0);
//   const acc = [];
//   function DFS(num) {
//     if(num===n) {
//       console.log([...acc, 5]);
//       answer++;
//       return;
//     } else {
//       for(let x of arr.filter(item => item[0]===num)) {
//         if(tmp[x[1]]===0) {
//           tmp[x[0]]=1;
//           acc.push(x[0]);
//           DFS(x[1]);
//           acc.pop();
//           tmp[x[0]]=0
//         } else {
//           continue;
//         }
//       }
//     }
//   }
//   DFS(1);
//   return answer;
// }
// let arr=[[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
// console.log(solution(5, arr));

//인접행렬
function solution(n, arr){  
  let answer=0;
  let graph = Array.from(Array(n+1), () => Array(n+1).fill(0));
  let ch = Array.from({length: n+1}, () => 0);
  let path = [];
  for(let [a,b] of arr) {
    graph[a][b] = 1;
  };
  function DFS(L) {
    if(L===n) {
      answer++;
      console.log(path);
    } else {
      for(let i=1; i<=n; i++) {
        if(graph[L][i]===1 && ch[i] ===0) {
          path.push(i);
          ch[i] = 1;
          DFS(i);
          path.pop();
          ch[i]=0;
        }
      }
    }
  }
  path.push(1);
  ch[1]=1;
  DFS(1);
  return answer;
}
let arr=[[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
console.log(solution(5, arr));
function solution(n, arr){  
  let answer=0;
  let tmp = Array.from({length: n+1}, () => 0);
  const acc = [];
  function DFS(num) {
    if(num===n) {
      console.log([...acc, 5]);
      answer++;
      return;
    } else {
      for(let x of arr.filter(item => item[0]===num)) {
        if(tmp[x[1]]===0) {
          tmp[x[0]]=1;
          acc.push(x[0]);
          DFS(x[1]);
          acc.pop();
          tmp[x[0]]=0
        } else {
          continue;
        }
      }
    }
  }
  DFS(1);
  return answer;
}
let arr=[[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
console.log(solution(5, arr));
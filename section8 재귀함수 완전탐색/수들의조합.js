function solution(n, k, arr, m){         
  let answer=0;
  let tmp = Array.from({length:k}, () => 0);
  function DFS(L,a) {
    if(L===k) {
      let sum = tmp.reduce((a,b) => a+b, 0);
      if(sum % m === 0) answer++;
    } else {
      for(let i=a; i<n; i++) {
        tmp[L] = arr[i];
        DFS(L+1,i+1);
      }
    }
  }
  DFS(0,0);
  return answer;
}

let arr=[2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));
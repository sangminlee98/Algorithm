function solution(n, m){
  let answer=[];
  let tmp = Array.from({length: m}, () => 0);
  let count = 0;
  function DFS(L) {
    if(L === m) {
      console.log(tmp);
      count++;
    } else {
      for(let i=0; i<n; i++) {
        tmp[L] = i+1;
        DFS(L+1);
      }
    }
  }
  DFS(0);
  answer = count;
  return answer;
}

console.log(solution(3, 2));
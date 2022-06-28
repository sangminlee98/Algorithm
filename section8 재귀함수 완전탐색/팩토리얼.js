function solution(n){         
  let answer;
  function DFS(count, value) {
    if(count>n) {
      answer = value;
    } else {
      DFS(count+1, value*count);
    }
  }
  DFS(1,1);
  return answer;
}

console.log(solution(5));
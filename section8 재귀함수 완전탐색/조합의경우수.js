function solution(n, r){         
  let ch = Array.from(Array(35), () => Array(35).fill(0));
  function DFS(F,B) {
    if(ch[F][B]>0) {
      return ch[F][B];
    }
    if(F===B) {
      ch[F][B] = 1;
      return 1;
    }
    else if(B===1) {
      ch[F][B] = F;
      return F;
    }
    else {
      return DFS(F-1, B-1)+DFS(F-1,B);
    }
  }
  return DFS(n,r);
}

console.log(solution(33, 19));
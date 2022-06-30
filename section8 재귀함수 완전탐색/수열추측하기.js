function solution(n, f){         
  let answer =[];
  let ch = Array.from(Array(35), () => Array(35).fill(0));
  let ch2 = Array.from({length: n+1}, () => 0);
  let tmp = [];
  let b = Array.from({length:n}, () => 0);
  function combi(F,B) {
    if(ch[F][B]>0) {
      return ch[F][B];
    }
    if(F===B || B===0) {
      ch[F][B] = 1;
      return 1;
    }
    else if(B===1 || F-B===1) {
      ch[F][B] = F;
      return F;
    }
    else {
      return combi(F-1, B-1)+combi(F-1,B);
    }
  }
  for(let i=0; i<n; i++) {
    b[i] = combi(n-1,i);
  };
  let flag = false;
  function DFS(L, sum) {
    if(flag) return;
    if(L === n && sum === f) {
      answer = tmp.slice();
      flag = true;
    } else {
      for(let i=1; i<=n; i++) {
        if(ch2[i] === 0) {
          ch2[i] = 1;
          tmp[L] = i;
          DFS(L+1, sum+(tmp[L]*b[L]));
          ch2[i] = 0;
        }
      }
    }
  }
  DFS(0,0);

  return answer;
}

console.log(solution(4, 16));
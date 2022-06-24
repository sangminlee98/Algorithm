function solution(m, ps, pt){         
  let answer=Number.MIN_SAFE_INTEGER;
  function DFS(L, scoreSum, timeSum) {
    if(L === ps.length) {
      if(timeSum <= m) {
        answer = Math.max(answer, scoreSum);
      }
    } else {
      DFS(L+1, scoreSum+ps[L], timeSum+pt[L]);
      DFS(L+1, scoreSum, timeSum);
    }
  }
  DFS(0,0,0);
  return answer;
}

let ps=[10, 25, 15, 6, 7]; // 점수
let pt=[5, 12, 8, 3, 4] // 걸리는 시간
console.log(solution(20, ps, pt));
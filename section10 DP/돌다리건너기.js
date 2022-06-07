function solution(n){  
  let answer=0;
  let dy = Array.from({length: n+2}, () => 0);
  dy[1] = 1;
  dy[2] = 2;
  for(let i=3; i<dy.length; i++) {
    dy[i] = dy[i-1]+ dy[i-2];
  }
  answer = dy[n+1];
  return answer;
}

console.log(solution(7));
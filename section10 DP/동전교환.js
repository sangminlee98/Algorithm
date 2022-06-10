function solution(m, coin){  
  let answer=0;
  let dy=Array.from({length:m+1}, ()=>0);
  for(let x of coin) {
    for(let i=x; i<dy.length; i++) {
      dy[i] = dy[i-x]+1;
    }
  }
  answer = dy[m];
  return answer;
}

let arr=[1, 2, 5];
console.log(solution(15, arr));
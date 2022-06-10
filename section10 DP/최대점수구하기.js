function solution(m, arr){  
  let answer=0;
  let dy=Array.from({length:m+1}, ()=>0);
  for(let x of arr) {
    for(let i=m; i>0; i--) {
      if(i-x[1]<0) break;
      dy[i] = Math.max(dy[i], dy[i-x[1]] + x[0]);
    }
  }
  answer = dy[m];
  return answer;
}

let arr=[[10, 5], [25, 12], [15, 8], [6, 3], [7, 4]];
console.log(solution(20, arr));
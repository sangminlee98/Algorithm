function solution(n, k){
  let answer;
  let queue=Array.from({length:n}, (v, i)=>i+1);
  let index = 0;
  while(true) {
    if(queue.length === 1) break;
    index = ((index+2)%queue.length);
    console.log(queue.splice(index%queue.length,1));
  }
  answer = queue[0];
  return answer;
}

console.log(solution(8, 3));
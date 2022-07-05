function solution(){  
  let answer="";
  let queue = [];
  queue.push(1);
  while(queue.length) {
    let a = queue.shift();
    answer += a + " ";
    for(let x of [a*2, a*2+1]) {
      if(x>7) continue;
      queue.push(x);
    }
  }
  return answer;
}

console.log(solution());
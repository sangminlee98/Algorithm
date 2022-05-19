function solution(s){  
  let answer;
  let max = Number.MIN_SAFE_INTEGER;
  let hash = new Map();
  for(let x of s) {
    if(hash.has(x)) hash.set(x,hash.get(x)+1);
    else hash.set(x,1);
  } 
  for(let [key, value] of hash) {
    if(value>max) {
      max = value;
      answer = key;
    }
  } 
  return answer;
}

let str="BACBACCACCBDEDE";
console.log(solution(str));
function solution(str1, str2){
  let answer="YES"; 
  let str1H = new Map();
  let str2H = new Map();
  for(let x of str1) {
    if(str1H.has(x)) str1H.set(x, str1H.get(x)+1);
    else str1H.set(x, 1);
  }
  for(let x of str2) {
    if(str2H.has(x)) str2H.set(x, str2H.get(x)+1);
    else str2H.set(x, 1);
  }
  str1H.forEach((v,k) => {
    if(str1H.get(k) !== str2H.get(k)) {
      answer = "NO";
    }
  })
  return answer;
}

let a="AbaAeCe";
let b="baeeACA";
console.log(solution(a, b));
function solution(n){
  let answer=[];
  let ch=Array.from({length:n+1}, ()=>0);
  function ziphap(s) {
    if(s>n) {
      let tmp ='';
      for(let i=1; i<s; i++) {
        if(ch[i] === 1) tmp += i+' ';
      }
      if(tmp.length>0) answer.push(tmp.trim());
    } else {
      ch[s]=1;
      ziphap(s+1);
      ch[s]=0;
      ziphap(s+1);
    }
  }
  ziphap(1);
  return answer;
}

console.log(solution(3)); 
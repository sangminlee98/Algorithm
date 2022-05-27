function solution(s) {
  let answer = 0;
  let stack = [];
  let prev;
  for(let x of s) {
    if(x === '(') {
      stack.push('(');
    }
    else {
      stack.pop();
      if(prev === '(') {
        answer += stack.length;
      } else {
        answer++;
      }
    }
    prev = x;
  }
  return answer;
}

let a="()(((()())(())()))(())";
console.log(solution(a));
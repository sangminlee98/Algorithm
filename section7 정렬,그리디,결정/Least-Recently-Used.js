function solution(size, arr){
  let answer=Array.from({length:size}, ()=>0);
  for(let x of arr) {
    if(!answer.includes(x)) {
      answer.pop();
      answer.unshift(x);
    } else {
      const index = answer.findIndex(value => value===x);
      answer.splice(index, 1);
      answer.unshift(x);
    }
  }
  return answer;
}

let arr=[1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
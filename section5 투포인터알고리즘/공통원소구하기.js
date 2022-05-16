function solution(arr1, arr2){
  let answer=[];           
  for(let x of arr1) {
    if(arr2.includes(x)){
      answer.push(x);
    }
  }
  answer.sort();
  return answer;
}

let a=[1, 3, 9, 5, 2];
let b=[3, 2, 5, 7, 8];
console.log(solution(a, b));
function solution(arr1, arr2){
  let answer=[];
  answer.push(...arr1);
  answer.push(...arr2);
  answer.sort();
  return answer;
}

let a=[1, 3, 5];
let b=[2, 3, 6, 7, 9];
console.log(solution(a, b));
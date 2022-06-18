function solution(times){
  let answer=Number.MIN_SAFE_INTEGER;
  let timeArr= Array.from({length: 72}, () => 0);
  for(let x of times) {
    for(let i=x[0]; i<x[1]; i++) {
      timeArr[i]++;
    }
  }
  answer = Math.max(...timeArr);
  return answer;
}

let arr=[[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]];
console.log(solution(arr));
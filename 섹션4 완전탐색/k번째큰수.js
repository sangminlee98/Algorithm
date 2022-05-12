function solution(n, k, card){
  let answer;
  let sumArr = [];
  for(let i=0; i<n-2; i++) {
    for(let j=i+1; j<n-1; j++) {
      for(let m=j+1; m<n; m++) {
        sumArr.push(card[i]+card[j]+card[m]);
      }
    }
  };
  const set = new Set(sumArr);
  const newSumArr = [...set];
  answer = newSumArr.sort((a,b) => b-a)[2];
  return answer;
}

let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
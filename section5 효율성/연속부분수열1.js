function solution(m, arr){
  let answer=0;
  // for(let i=0; i<arr.length; i++) {
  //   let sum = 0, lt = i;
  //   while(sum<=m) {
  //     sum += arr[lt];
  //     if(sum == m) {
  //       answer++;
  //       break;
  //     }
  //     lt++;
  //     if(lt==arr.length) break;
  //   }
  // }
  let lt=0;
  let rt=1;
  let tmp=arr[lt]+arr[rt];
  while(rt<arr.length) {
    if(tmp===m) {
      answer++;
      tmp -= arr[lt++];
    } else if(tmp<m) {
      tmp+=arr[++rt];
    } else {
      tmp -= arr[lt++];
    }
  }
  return answer;
}

let a=[1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
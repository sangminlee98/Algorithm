function solution(arr){
  let answer=arr;
  for(let i=1; i<arr.length; i++) {
    let k=i;
    for(let j=i-1; j>=0; j--) {
      if(arr[k]<arr[j]) {
        [arr[j],arr[k]] = [arr[k],arr[j]];
        k--;
      }
      console.log(arr);
    }
  }
  return answer;
}

let arr=[11, 7, 5, 6, 10, 9];
console.log(solution(arr));

function solution(arr){
  let answer=arr;
  for(let i=0; i<arr.length-1; i++) {
    for(let j=1; j<arr.length-i; j++) {
      let tmp;
      if(arr[j]<arr[j-1]) {
        tmp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = tmp;
      }
    }
  }
  return answer;
}

let arr=[13, 5, 11, 7, 23, 15];
console.log(solution(arr));
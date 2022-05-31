function solution(arr){
  let answer=arr;
  for(let i=0; i<arr.length-1; i++) {
    let min = Number.MAX_SAFE_INTEGER;
    let index;
    for(let j=i+1; j<arr.length; j++) {
      if(min>arr[j]) {
        min = arr[j];
        index = j;
      }
    };
    let k = arr[i];
    arr[i] = min;
    arr[index] = k;
  }
  return answer;
}

let arr=[13, 5, 11, 7, 23, 15];
console.log(solution(arr));

let sm = 1;

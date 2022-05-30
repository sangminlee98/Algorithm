function solution(arr){
  let answer=arr;
  let index;
  let flag = false;
  for(let i=0; i<arr.length-1; i++) {
    let min = Number.MAX_SAFE_INTEGER;
    for(let j=i; j<arr.length; j++) {
      if(arr[j]<0) {
        [arr[i],arr[j]]=[arr[j],arr[i]];
        flag = true;
        break;
      }
      if(arr[j]<min) {
        index = j;
        min = arr[j];
      }
    }
    if(flag) {
      flag = false;
      continue;
    }
    let k = arr[i];
    arr[i] = min;
    arr[index] = k;
  }
  return answer;
}

let arr=[1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
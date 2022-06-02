function solution(arr){
  let answer=[];
  let flag = false;
  for(let i=0; i<arr.length-1; i++) {
    if(arr[i]>arr[i+1] && flag) {
      answer.push(i+2);
    }
    if(arr[i]>arr[i+1] && !flag) {
      answer.push(i+1);
      flag = true;
    }  
  }
  return answer;
}

let arr=[120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));
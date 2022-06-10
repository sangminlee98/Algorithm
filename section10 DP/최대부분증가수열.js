function solution(arr){  
  let answer=0;
  let dy=[arr[0]];
  for(let i=1; i<arr.length; i++) {
    console.log(dy);
    if(arr[i]>dy[dy.length-1]) dy.push(arr[i]);
    else {
      if(dy.length>1 && arr[i]>=dy[dy.length-2]) {
        dy.pop();
        dy.push(arr[i]);
      } else continue;
    }
  }
  answer = dy.length;
  return answer;
}

let arr=[5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));
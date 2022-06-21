function solution(arr) {
  let answer = [];
  arr.sort();
  let count=0;
  let p1=p2=0;
  const setArr = [...new Set(arr)];
  while(p1<=setArr.length && p2<=arr.length) {
    if(setArr[p1] === arr[p2]) {
      count++;
      p2++;
    } else {
      if(count === 1) {
        p1++;
        count=0;
      } else {
        answer.push(count);
        p1++;
        count=0;
      }
    }
  }
  return answer.length === 0 ? [-1] : answer;
}

const arr = [3,2,4,4,2,5,2,5,5];
console.log(solution(arr));
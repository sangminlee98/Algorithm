function solution(meeting){
  let answer=0;
  meeting.sort((a,b) => {
    if(a[1]===b[1]) return a[0]-b[0];
    else return a[1]-b[1];
  });
  let end = 0;
  for(let x of meeting) {
    if(x[0]>=end) {
      end = x[1];
      answer++;
    }
  }
  return answer;
}

let arr=[[3,3],[1,3],[2,3]];
console.log(solution(arr));
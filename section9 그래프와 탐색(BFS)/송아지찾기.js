function solution(s, e){  
  let answer=0;
  function BFS(n) {
    if(n === e) console.log(answer);
    else {
      let arr = [n-1, n+1, n+5];
      const minAbs = Math.min(Math.abs(arr[0]-e),Math.abs(arr[1]-e),Math.abs(arr[2]-e));
      const nextNum = arr.find(num => Math.abs(num-e)===minAbs);
      answer++;
      BFS(nextNum);
    }
  }
  BFS(s);
}

solution(8, 3);
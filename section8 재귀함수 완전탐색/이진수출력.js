function solution(n){
  let answer = '';
  function binary(n) {
    if(n===1) answer += '1';
    else {
      binary(Math.floor(n/2));
      answer += n%2+'';
    }
  }
  binary(n);
  return answer;
}
console.log(solution(11)); 
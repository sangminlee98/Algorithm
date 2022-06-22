function recursion(n) {
  if(n===0) return;
  else {
    recursion(n-1);
    console.log(n);
  }
}
function solution(n){
  recursion(n);
}

solution(3);
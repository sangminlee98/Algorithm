function solution(n){
  let answer="";
  function binaryTree(s) {
    if(s>7) return;
    else {
      binaryTree(s*2);
      binaryTree(s*2+1);
      answer += s+' '; // 위치에 따라 전위,중위,후위순회 탐색 가능
    }
  }
  binaryTree(n);
  return answer;
}

console.log(solution(1));
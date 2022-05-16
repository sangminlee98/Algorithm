function solution(m, product){
  let answer=0;
  const student = product.length;
  let max = Number.MIN_SAFE_INTEGER;
  let maxIdx = 0;
  for(let i=0; i< student; i++) {
    if(product[i][0]>max) {
      max = product[i][0];
      maxIdx = i;
    }
  };
  product[maxIdx][0] = max/2;
  
  let cost = [];
  for(let i=0; i<student; i++) {
    cost.push(product[i][0] + product[i][1]);
  };
  cost.sort((a,b) => a-b);
  let totalCost = 0;
  for(let i=0; i<student; i++) {
    if(totalCost<m) {
      totalCost += cost[i];
      answer++;
    } else {
      break;
    }
  }
  return answer;
}

let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));
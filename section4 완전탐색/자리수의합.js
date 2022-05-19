
const solution = (arr) => {
  let answer, max=Number.MIN_SAFE_INTEGER;
  arr.forEach(num => {
    let sNum = num.toString();
    let tmp = sNum.split("");
    const sum = tmp.reduce((prev, curr) => {
      return Number(prev)+Number(curr);
    },0);
    if(sum>max) {
      max = sum;
      answer = num;
    } else if(sum == max) {
      answer = Math.max(answer, num);
    }
  })
  return answer;
}

let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(arr));
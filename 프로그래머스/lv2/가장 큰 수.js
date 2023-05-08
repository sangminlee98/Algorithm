function solution(numbers) {
  var answer = "";
  let strArr = [];
  let cnt = 0;
  for (let num of numbers) {
    strArr.push(num.toString());
    if (num === 0) cnt++;
  }
  if (cnt === numbers.length) return "0";
  answer = strArr.sort((a, b) => b + a - (a + b));
  return answer.join("");
}

console.log(solution([0, 0, 0, 0]));

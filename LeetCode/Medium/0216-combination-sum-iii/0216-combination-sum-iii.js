/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  let answer = [];

  function makeCombination(combination, remainNumber) {
    if(remainNumber === 0 && combination.reduce((acc, curr) => acc + curr, 0) === n) answer.push(combination);

    for(let i = combination[combination.length-1] ?? 0 + 1; i < (n > 9 ? 10 : n); i++) {
      if(combination.reduce((acc, curr) => acc + curr, 0) + i <= n) {
         makeCombination([...combination, i], remainNumber - 1);
      };
    }
  }

  makeCombination([], k);
  return answer;
};
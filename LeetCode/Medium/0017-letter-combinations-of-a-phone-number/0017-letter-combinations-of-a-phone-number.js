/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if(digits.length === 0) return [];
  
  const stringMap = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  const answer = [];

  function makeCombination(combination, nextDigits) {
    if(nextDigits.length === 0) {
      answer.push(combination)
    } else {
      const index = nextDigits[0];
      const strings = stringMap[index - "2"];
      for(const string of strings) {
        makeCombination(combination + string, nextDigits.slice(1));
      }
    }
  }

  makeCombination("", digits);
  return answer
};
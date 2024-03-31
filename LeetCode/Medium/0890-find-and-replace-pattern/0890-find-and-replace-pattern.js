/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
  const answer = [];
  for(const x of words) {
    if(returnPattern(x) === returnPattern(pattern)) answer.push(x);
  }
  return answer;
};

function returnPattern (str) {
  const map = new Map();
  for(let i = 0; i < str.length; i++) {
    if(!map.has(str[i])) {
      map.set(str[i], String.fromCharCode(map.size + 97));
    }
  }
  let pattern = "";
  for(let i = 0; i < str.length; i++) {
    pattern += map.get(str[i]);
  }

  return pattern;
}
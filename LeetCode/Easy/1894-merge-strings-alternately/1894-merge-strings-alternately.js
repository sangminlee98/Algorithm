/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  const answer = [];
  const maxLen = Math.max(word1.length, word2.length);
  for(let i = 0; i < maxLen; i++) {
    word1[i] && answer.push(word1[i]);    
    word2[i] && answer.push(word2[i]);    
  }
  return answer.join("");
};
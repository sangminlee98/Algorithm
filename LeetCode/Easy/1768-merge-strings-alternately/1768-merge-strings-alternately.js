/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  let answer = "";
  for(let i = 0; i < Math.min(word1.length, word2.length); i++) {
    answer += word1[i] + word2[i];
  };

  return word1.length > word2.length ? answer + word1.slice(word2.length) : answer + word2.slice(word1.length)
};
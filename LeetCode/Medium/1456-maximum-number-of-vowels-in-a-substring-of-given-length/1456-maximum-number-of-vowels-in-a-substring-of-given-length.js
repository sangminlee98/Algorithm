/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
  const vowels = ["a", "e", "i", "o", "u"];
  let cnt = 0;
  let maxCnt;
  for(let i = 0; i < k; i++) {
    if(vowels.includes(s[i])) cnt++;
  };
  maxCnt = cnt;
  for(let i = k; i < s.length; i++) {
    if(vowels.includes(s[i - k])) cnt--;
    if(vowels.includes(s[i])) cnt++;
    maxCnt = Math.max(maxCnt, cnt);
  };
  return maxCnt;
};
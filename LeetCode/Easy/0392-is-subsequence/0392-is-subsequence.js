/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let p = 0;
  let tmp = "";
  for(let i = 0; i < t.length; i++) {
    if(s[p] === t[i]) {
      tmp += t[i];
      p++;
    }
  }
  return tmp === s;
};
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  if(str1 + str2 !== str2 + str1) return "";

  function findDivisorLength(x, y) {
    if(y === 0) return x;
    return findDivisorLength(y, x % y);
  };

  return str1.slice(0, findDivisorLength(str1.length, str2.length))
};
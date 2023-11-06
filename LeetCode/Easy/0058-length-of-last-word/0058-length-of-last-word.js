/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let arr = s.split()
  while(arr.some(item => item.includes(" "))) {
    arr = arr.join("").trim().split(" ");
  }
  return arr[arr.length-1].length;
};
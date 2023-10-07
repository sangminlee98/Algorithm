/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
  arr.sort((a,b) => b-a);
  const d = Math.abs(arr[1] - arr[0]);
  let flag = true;
  for(let i = 2; i < arr.length; i++) {
    if(Math.abs(arr[i] - arr[i-1]) !== d) flag = false;
  };
  return flag;
};
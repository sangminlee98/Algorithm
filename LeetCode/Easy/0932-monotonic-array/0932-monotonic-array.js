/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
  if(nums.length === 1) return true;
  return checkIncMono(nums) || checkDecMono(nums) ? true : false;
};

function checkIncMono(arr) {
  let flag = true;
  arr.reduce((acc, curr) => {
    if(acc > curr) flag = false;
    return curr;
  }, arr[0]);
  return flag;
}

function checkDecMono(arr) {
  let flag = true;
  arr.reduce((acc, curr) => {
    if(acc < curr) flag = false;
    return curr;
  }, arr[0]);
  return flag;
}
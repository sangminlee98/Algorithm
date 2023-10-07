/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
  let cnt = 0;
  let flag = false;
  nums.forEach(num => {
    if(num < 0) cnt++;
    if(num === 0) {
      flag = true;
      return false;
    }; 
  });
  if(flag) return 0;
  return cnt % 2 === 0 ? 1 : -1;
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let oddIdx = 0;
    for(let i = 0; i < nums.length; i++) {
      if(nums[i]%2 === 0) {
        [nums[oddIdx], nums[i]] = [nums[i], nums[oddIdx]];
        oddIdx++;
      }
    }
    return nums;
};
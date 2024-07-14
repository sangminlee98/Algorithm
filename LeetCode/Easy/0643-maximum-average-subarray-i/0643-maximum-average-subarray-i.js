/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let sum = 0;
  let max;
  for(let i = 0; i < k; i++) sum += nums[i];
  max = sum;
  console.log(sum);
  for(let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k];
    max = Math.max(max, sum);
  };
  return max/k;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  let left = 0;
  let right = nums.length - 1;

  if(nums.length === 1) return 0;

  while(left < right) {
    const mid = left + right >> 1;

    if(mid === 0) {
      if(nums[mid] > nums[mid + 1]) return mid;
      left = mid + 1;
      continue;
    } else if (mid === nums.length - 1) {
      if(nums[mid] > nums[mid - 1]) return mid;
      right = mid - 1;
      continue;
    }

    if(nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
      return mid;
    } else if(nums[mid] > nums[mid - 1]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
};
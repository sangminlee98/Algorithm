/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  // 누적 최대값 배열 만들기
  // 현재 누적값 = (currentIndex - 2 인 누적값 중 최대값) + (현재 값);
  const dp = [nums[0]];
  for(let i = 1; i < nums.length; i++) {
    if(i === 1) {
      dp[1] = nums[1];
    } else {
      dp[i] = Math.max(...dp.slice(0, -1)) + nums[i];
    }
  }
  return Math.max(...dp);
};
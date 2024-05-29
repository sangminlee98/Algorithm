/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const dp = [];
  for(let i = 0; i < cost.length; i++) {
    if(i < 2) dp[i] = cost[i];
    else dp[i] = cost[i] + Math.min(dp[i-1], dp[i-2]);
  }
  return Math.min(dp[cost.length - 1], dp[cost.length - 2])
};
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
  let left = 1;
  let right = Math.max(...piles);
  while(left <= right) {
    const mid = left + right >> 1;
    let time = 0;
    for(const bananas of piles) {
      time += Math.ceil(bananas/mid);
    };
    if(time > h) left = mid + 1;
    else right = mid - 1;
  }
  return left;
};
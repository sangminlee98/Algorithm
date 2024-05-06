/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
  const answer = [];
  potions.sort((a, b) => a - b);
  const spellsLen = spells.length;
  const potionsLen = potions.length;

  for(let i = 0; i < spellsLen; i++) {
    let left = 0;
    let right = potionsLen - 1;
    while(left <= right) {
      const mid = (left + right) >> 1;
      if(spells[i] * potions[mid] >= success) right = mid - 1;
      else left = mid + 1;
    }
    answer.push(potionsLen - left);
  }
  return answer;
};
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
  const map = new Map();
  for(const x of arr){
    map.set(x, (map.get(x) || 0) + 1);
  }
  
  const mapArray = [...map];
  mapArray.sort((a,b) => a[1]-b[1]);

  const sortedArr = [];
  for(const [value, count] of mapArray) {
      for(let i = 0; i < count; i++) {
        sortedArr.push(value);
      }
  };

  const answerSet = new Set(sortedArr.slice(k));

  return answerSet.size;
};
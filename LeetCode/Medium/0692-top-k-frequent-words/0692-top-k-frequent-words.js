/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  const answer = [];
  const map = new Map();
  for(let i = 0; i < words.length; i++) {
    if(!map.has(words[i])) {
      map.set(words[i], 1);
    } else {
      map.set(words[i], map.get(words[i])+1);
    }
  }

  const mapArray = [...map];
  mapArray.sort((a,b) => {
	  if(a[1] === b[1]) return b[0] < a[0] ? 1 : -1;
	  return b[1] - a[1];
  })
  
  for(let i = 0; i < k; i++) {
    answer.push(mapArray[i][0]);
  }

  return answer;
};
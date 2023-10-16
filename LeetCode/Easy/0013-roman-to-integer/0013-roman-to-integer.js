/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let answer = 0;
  const map = new Map();
  map.set("I", 1);
  map.set("V", 5);
  map.set("X", 10);
  map.set("L", 50);
  map.set("C", 100);
  map.set("D", 500);
  map.set("M", 1000);
  s = s.replace("IV", "IIII");
  s = s.replace("IX", "VIIII");
  s = s.replace("XL", "XXXX");
  s = s.replace("XC", "LXXXX");
  s = s.replace("CD", "CCCC");
  s = s.replace("CM", "DCCCC");

  for(let i = 0; i < s.length; i++) {
    answer += map.get(s[i]);
  }

  return answer;
};
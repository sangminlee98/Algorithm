function solution(s, n) {
  let str = "";
  for (let i = 0; i < s.length; i++) {
    let idx = s[i].charCodeAt();
    for (let k = 0; k < n; k++) {
      if (idx === 32) continue;
      if (idx === 122) {
        idx = 97;
        continue;
      }
      if (idx === 90) {
        idx = 65;
        continue;
      }
      idx++;
    }
    str += String.fromCharCode(idx);
  }
  return str;
}

console.log(solution("a B z", 4));

function solution(s) {
  let idx;
  const sarr = [...s];
  sarr.sort().reverse();
  console.log(sarr);
  for (let i = 0; i < s.length; i++) {
    if (sarr[i].charCodeAt() <= 90) {
      idx = i;
      break;
    }
  }
  const upper = sarr.splice(0, idx);
  const answer = [...upper, ...sarr];
  return answer.join("");
}

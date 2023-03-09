// function solution(s) {
//   let answer = 0;
//   let cnt1 = 1;
//   let cnt2 = 0;
//   let char = s[0];
//   for (let x = 1; x < s.length; x++) {
//     if (char === s[x]) cnt1++;
//     else cnt2++;
//     if (cnt1 === cnt2) {
//       answer++;
//       char = s[x + 1];
//       x += 1;
//       if (x === s.length - 1) {
//         answer++;
//         break;
//       }
//       cnt1 = 1;
//       cnt2 = 0;
//     }
//     if (x === s.length - 1) {
//       answer++;
//       break;
//     }
//   }

//   return answer === 0 ? 1 : answer;
// }

// 재귀함수를 이용한 풀이
function solution(s, count = 0) {
  if (!s) return count;
  const [first, ...rest] = s.split("");
  let sameCount = 1;
  let insameCount = 0;
  let i = 0;
  for (; i < rest.length; i++) {
    if (first === rest[i]) sameCount++;
    else insameCount++;
    if (sameCount === insameCount) break;
  }
  return solution(rest.slice(i + 1).join(""), count + 1);
}

console.log(solution("abss"));
console.log(solution("abracadabra"));
console.log(solution("aaabbaccccabba"));

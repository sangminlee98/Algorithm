// function solution(s) {
//   s = s.toLowerCase();
//   let p = 0;
//   let y = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "p") p++;
//     if (s[i] === "y") y++;
//   }
//   return p === y ? true : false;
// }
function solution(s) {
  return (s.match(/p/gi) || []).length === (s.match(/y/gi) || []).length;
}

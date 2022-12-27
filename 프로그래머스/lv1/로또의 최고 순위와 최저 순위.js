// function solution(lottos, win_nums) {
//   let deletedNumCnt = 0;
//   let matchCtn = 0;
//   lottos.map((v) => {
//     if (v === 0) deletedNumCnt++;
//   });
//   lottos.map((v) => {
//     if (win_nums.includes(v)) matchCtn++;
//   });
//   const max = 6 - (matchCtn + deletedNumCnt) + 1;
//   const min = 6 - matchCtn + 1;
//   const answer = [max > 6 ? 6 : max, min > 6 ? 6 : min];
//   return answer;
// }
function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];
  const minCnt = lottos.filter((v) => win_nums.includes(v)).length;
  const zeroCnt = lottos.filter((v) => !v).length;
  return [rank[minCnt + zeroCnt], rank[minCnt]];
}

console.log(solution([1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12]));

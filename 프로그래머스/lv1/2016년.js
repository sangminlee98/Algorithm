// function solution(a, b) {
//   const day = new Date(`2016-${a}-${b}`);
//   return day.toString().split(" ")[0].toUpperCase();
// }

function solution(a, b) {
  const days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const week = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  let totalDays = b;
  for (let i = 0; i < a - 1; i++) {
    totalDays += days[i];
  }
  return week[totalDays % 7];
}

console.log(solution(5, 24));

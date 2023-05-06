// function solution(progresses, speeds) {
//   let answer = [0];
//   let days = progresses.map((progress, index) =>
//     Math.ceil((100 - progress) / speeds[index])
//   );
//   let maxDay = days[0];

//   for (let i = 0, j = 0; i < days.length; i++) {
//     if (days[i] <= maxDay) {
//       answer[j] += 1;
//     } else {
//       maxDay = days[i];
//       answer[++j] = 1;
//     }
//   }
//   return answer;
// }

// console.log(solution([93, 30, 55], [1, 30, 5]));

function solution(progresses, speeds) {
  let answer = [];
  let day = 1;
  let cnt = 0;
  while (progresses[0]) {
    let progress = progresses[0] + speeds[0] * day;
    if (progress >= 100) {
      cnt++;
      progresses.shift();
      speeds.shift();
    } else {
      if (cnt > 0) {
        answer.push(cnt);
      }
      cnt = 0;
      day++;
    }
  }
  answer.push(cnt);
  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));

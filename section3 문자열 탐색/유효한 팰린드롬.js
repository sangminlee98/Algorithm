function solution(str) {
  const arr = str.toUpperCase().split("");
  const filteredArr = [];
  for (let i of arr) {
    if (i.charCodeAt() >= 65 && i.charCodeAt() <= 90) {
      filteredArr.push(i);
    }
  }
  const filteredStr = filteredArr.join("");
  return filteredStr === filteredArr.reverse().join("") ? "YES" : "NO";
}

console.log(solution("found7, time: study; Yduts; emit, 7Dnuof"));

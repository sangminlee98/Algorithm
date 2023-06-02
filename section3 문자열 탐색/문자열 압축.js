function solution(str) {
  let answer = "";
  let ch = str[0];
  let cnt = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === ch) {
      cnt++;
    } else {
      answer += ch + cnt;
      ch = str[i];
      cnt = 1;
    }
  }
  answer += ch + cnt;
  return answer.replaceAll("1", "");
}

console.log(solution("KKHSSSSSSSE"));

// K2HS7E

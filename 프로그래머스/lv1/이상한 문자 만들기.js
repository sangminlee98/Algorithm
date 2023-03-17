function getString(s) {
  let string = "";
  for (let i = 0; i < s.length; i++) {
    const charCode = s[i].charCodeAt();
    if (i % 2 === 0 && charCode >= 97) {
      string += String.fromCharCode(charCode - 32);
      continue;
    }
    if (i % 2 === 1 && charCode <= 90) {
      string += String.fromCharCode(charCode + 32);
      continue;
    }
    string += s[i];
  }
  return string;
}
function solution(s) {
  const strArr = s.split(" ");
  let answerArr = [];
  for (let i = 0; i < strArr.length; i++) {
    answerArr.push(getString(strArr[i]));
  }
  return answerArr.join(" ");
}

console.log(solution("tRy  hElLo wOrLd"));

// 	TrY HeLlO WoRlD

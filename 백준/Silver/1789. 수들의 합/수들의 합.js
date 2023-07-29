let input = +require('fs').readFileSync('/dev/stdin').toString();

let answer = 1;

while(answer * (answer + 1) <= 2 * input) {
  answer++;
}

console.log(answer === 1 ? 1 : answer - 1)
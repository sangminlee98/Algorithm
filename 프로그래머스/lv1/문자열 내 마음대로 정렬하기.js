function solution(strings, n) {
  strings.sort((a, b) => {
    if (a[n] === b[n]) {
      if (a > b) return 1;
      else if (a < b) return -1;
      else return 0;
    }
    return a[n].charCodeAt() - b[n].charCodeAt();
  });
  return strings;
}

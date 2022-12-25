function solution(t, p) {
  const tLen = t.length;
  const pLen = p.length;
  let arr = [...t].filter((_, idx) => {
    if (idx + pLen > tLen) return;
    return Number(t.substring(idx, idx + pLen)) <= Number(p);
  });
  return arr.length;
}

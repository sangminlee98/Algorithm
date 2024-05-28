/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  const triboArr = [0, 1, 1]
  function tribo (k) {
    if(triboArr.length > k) return triboArr[k];

    return triboArr[k] = tribo(k-1) + tribo(k-2) + tribo(k-3);
  };

  tribo(n);
  return triboArr[n];
};
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const tmp = BigInt(digits.join(""))+BigInt(1);
    return tmp.toString().split("");
};
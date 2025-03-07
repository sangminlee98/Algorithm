function solution(numbers) {
    const strNum = numbers.map(String);
    if(strNum.every(str => str === "0")) return "0";
    strNum.sort((a,b) => (b+a) - (a+b));
    return strNum.join("")
}
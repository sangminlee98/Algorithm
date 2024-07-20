function solution(numbers) {
    const set = new Set();
    for(let i = 0; i < numbers.length - 1; i++) {
        for(let j = i + 1; j <numbers.length; j++) {
            const sum = numbers[i] + numbers[j];
            if(set.has(sum)) continue;
            else set.add(sum);
        }
    };
    return [...set].sort((a,b) => a - b);
}
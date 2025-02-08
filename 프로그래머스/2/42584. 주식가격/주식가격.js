function solution(prices) {
    const answer = new Array(prices.length).fill(0);
    const stack = []
    
    for(let i = 0; i < prices.length; i++) {
        while(stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
            const v = stack.pop();
            answer[v] = i - v;
        }
        stack.push(i);
    }
    
    while(stack.length > 0) {
        const v = stack.pop();
        answer[v] = prices.length - 1 - v;
    }
    
    return answer
}
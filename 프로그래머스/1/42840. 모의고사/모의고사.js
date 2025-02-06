function solution(answers) {
    const scores = [0, 0, 0]
    
    const patterns = [
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ]
    
    for(let i = 0; i < answers.length; i++) {
        for(let j = 0; j < patterns.length; j++) {
            const pattern = patterns[j];
            if(pattern[i % pattern.length] === answers[i]) {
                scores[j] += 1;
            }
        }
    }
    
    const max = Math.max(...scores);
    const answer = [];
    for(const [idx, value] of scores.entries()) {
        if(value === max) answer.push(idx+1);
    }
    
    return answer;
}
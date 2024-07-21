function solution(N, stages) {
    const failureRateMap = new Map();
    const userMap = new Map();
    
    for(let i = 1; i <= N; i++) {
        const challenger = stages.filter(stage => i <= stage).length;
        userMap.set(i, challenger)
    }
    
    for(let i = 1; i <= N; i++) {
        const stageChallenger = stages.filter(stage => i === stage).length;
        failureRateMap.set(i, stageChallenger / userMap.get(i));
    }
    
    return Array.from(failureRateMap).sort((a,b) => {
        if(b[1] !== a[1]) {
            return b[1] - a[1];
        } else {
            return a[0] - b[0];
        }
    }).map(item => item[0]);
}
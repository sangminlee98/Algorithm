function solution(N, stages) {
    const map = new Map();
    for(let i = 0; i < N; i++) {
        let total = 0;
        let noClear = 0;
        for(let j = 0; j < stages.length; j++) {
            if(stages[j] >= i+1) total++;
            if(stages[j] === i+1) noClear++;
        }
        map.set(i+1, noClear / total)
    }
    const newMap = new Map([...map].sort((a,b) => b[1] - a[1]));
    const answer = [];
    for(const stage of newMap.keys()) {
        answer.push(stage);
    } 
    return answer;
}
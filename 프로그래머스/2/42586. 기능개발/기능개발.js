function solution(progresses, speeds) {
    const answer = [];
    let idx = 0;
    let cnt = 0;
    
    while(progresses.length > idx) {
        cnt = 0;
        for(let i = 0; i < progresses.length; i++) {
            progresses[i] += speeds[i];
        };
        while(progresses[idx] >= 100) {
            cnt++;
            idx++;
        }
        if(cnt > 0) answer.push(cnt);
    }
    
    return answer
}
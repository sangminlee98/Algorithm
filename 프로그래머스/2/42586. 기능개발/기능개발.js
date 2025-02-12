function solution(progresses, speeds) {
    const restDay = progresses.map((progress, i) => Math.ceil((100 - progress)/speeds[i]));
    
    const answer = [];
    let cnt = 0;
    let maxDay = restDay[0];
    
    for(const day of restDay) {
        if(day <= maxDay) {
            cnt++;
        } else {
            answer.push(cnt);
            cnt = 1;
            maxDay = day;
        }
    };
    
    answer.push(cnt);
    return answer;
}
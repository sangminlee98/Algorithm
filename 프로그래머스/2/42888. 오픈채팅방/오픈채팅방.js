function solution(record) {
    const answer = [];
    const userMap = new Map();
    const history = [];
    for(const r of record) {
        const [cmd, uid, nickname] = r.split(" ");
        if(cmd !== "Change") history.push([cmd, uid]);
        if(cmd !== "Leave") userMap.set(uid, nickname);
    };
    
    for(const [cmd, uid] of history) {
        const msg = cmd === "Enter" ? "들어왔습니다." : "나갔습니다.";
        answer.push(`${userMap.get(uid)}님이 ${msg}`);
    }
    return answer;
}
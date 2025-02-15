function solution(id_list, report, k) {
    const answer = [];
    const historyObj = {};
    const reportedObj = {};
    const bannedUser = [];
    
    for(const r of report) {
        const [user, target] = r.split(" ");
        if(!(user in historyObj)) {
            historyObj[user] = [];
        };
        if(!(target in reportedObj)) {
            reportedObj[target] = 0;
        };
        
        if(!historyObj[user].includes(target)) {
            reportedObj[target] += 1;
            historyObj[user].push(target);
        }
        
    };
    
    Object.entries(reportedObj).map(([user, count]) => {
        if(count >= k) bannedUser.push(user);
    })
    
    for(const id of id_list) {
        let cnt = 0;
        if(id in historyObj) {
            historyObj[id].map(hist => bannedUser.includes(hist) && cnt++)
        };
        answer.push(cnt);   
    }

    return answer;
}
function solution(enroll, referral, seller, amount) {
    const relationMap = new Map();
    const profitMap = new Map();
    for(let i = 0; i < enroll.length; i++) {
        relationMap.set(enroll[i], referral[i]);
    };
    
    for(const member of relationMap.keys()) {
        profitMap.set(member, 0);
    }
    
    for(let i = 0; i < seller.length; i++) {
        const price = amount[i] * 100;
        let interest = Math.floor(price * 0.1);
        let parent = relationMap.get(seller[i]);
        
        
        profitMap.set(seller[i], profitMap.get(seller[i]) + price - interest);
        while(parent !== "-") {
            const principal = interest;
            interest = Math.floor(interest * 0.1);
            if(principal - interest === 0) break;
            profitMap.set(parent, profitMap.get(parent) + principal - interest);
            parent = relationMap.get(parent);
        }
    }
    const answer = [];
    for(const value of profitMap.values()) {
        answer.push(value);
    }
    
    return answer;
}
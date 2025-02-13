function solution(want, number, discount) {
    let answer = 0;
    const wantMap = new Map();
    for(let i = 0; i < want.length; i++) {
        wantMap.set(want[i], number[i])
    }
    
    for(let i = 0; i <= discount.length - 10; i++) {
        const wantMapCp = new Map([...wantMap]);
        for(let j = 0; j < 10; j++) {
            if(!wantMapCp.has(discount[i+j])) continue;
            else if(wantMapCp.get(discount[i+j]) === 1) wantMapCp.delete(discount[i+j]);
            else wantMapCp.set(discount[i+j], wantMapCp.get(discount[i+j]) - 1);
        };
        if(wantMapCp.size === 0) answer++;
    }
    return answer;    
}

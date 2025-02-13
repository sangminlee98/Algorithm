function solution(participant, completion) {
    const map = new Map();
    for(const p of participant) {
        if(!map.has(p)) map.set(p, 1);
        else map.set(p, map.get(p) + 1);
    };
    
    for(const c of completion) {
        if(map.get(c) === 1) {
            map.delete(c);
        } else {
            map.set(c, map.get(c) - 1);
        }
    }
    
    return map.keys().next().value
}
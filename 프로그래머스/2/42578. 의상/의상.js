function solution(clothes) {
    let answer = 1;
    const map = new Map();
    for(const cloth of clothes) {
        const [name, type] = cloth;
        if(!map.has(type)) map.set(type, 1);
        else map.set(type, map.get(type) + 1);
    };
    
    for(const key of map.keys()) {
        answer *= map.get(key) + 1;
    }
    
    return answer - 1;
}
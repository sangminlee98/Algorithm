function combinations(arr, n) {
    if(n === 1) return arr.map(v => [v]);
    const result = [];
    
    arr.forEach((fixed, idx, arr) => {
        const rest = arr.slice(idx + 1);
        const combis = combinations(rest, n-1);
        const combine = combis.map(v => [fixed, ...v]);
        result.push(...combine);
    });
    
    return result;
}

function solution(orders, course) {
    const answer = [];
    
    for(const c of course) {
        const menu = [];
        
        for(const order of orders) {
            const orderArr = order.split("").sort();
            const comb = combinations(orderArr, c);
            menu.push(...comb);
        };
        
        const countObj = {};
        for(const m of menu) {
            const key = m.join("");
            if(!(key in countObj)) countObj[key] = 0;
            countObj[key] += 1;
        };
        
        const max = Math.max(...Object.values(countObj));
        if(max > 1) {
            Object.entries(countObj).map(([menu, count]) => {
                if(count === max) answer.push(menu);
            })
        }
    };
    
    return answer.sort();
}
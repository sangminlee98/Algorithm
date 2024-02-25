function solution(N, road, K) {
    const graph = Array.from({length: N + 1}, () => []);
    const cost = Array.from({length: N + 1}, () => Infinity);
    const queue = [];
    
    for(let i = 0; i < road.length; i++) {
        const curr = road[i][0];
        const next = road[i][1];
        const dist = road[i][2];
        
        graph[curr].push([next, dist]);
        graph[next].push([curr, dist]);
    }
    
    queue.push([1 , 0]);
    cost[1] = 0;
    
    while(queue.length) {
        const [current, dist] = queue.shift();
        
        for(let i = 0; i < graph[current].length; i++) {
            const next = graph[current][i][0];
            const nextCost = graph[current][i][1];
            
            if(cost[next] > cost[current] + nextCost) {
                cost[next] = cost[current] + nextCost;
                queue.push([next, nextCost]);
            }
        }
    }
    return cost.filter(n => n <= K).length;
}
class Queue {
    constructor() {
        this.item = [];
        this.front = 0;
        this.rear = 0;
    }
    
    push(item) {
        this.item.push(item);
        this.rear++;
    }
    pop() {
        return this.item[this.front++];
    }
    isEmpty() {
        return this.front === this.rear;
    }
}

function solution(info, edges) {
    const tree = Array.from({length: info.length}, () => []);
    for(const [from, to] of edges) {
        tree[from].push(to);
    }
    let maxSheep = 0;
    
    const q = new Queue();
    q.push([0, 1, 0, new Set()]);
    
    while(!q.isEmpty()) {
        const [current, sheep, wolf, visited] = q.pop();
        maxSheep = Math.max(maxSheep, sheep);
        
        for(const next of tree[current]) {
            visited.add(next);
        };
        
        for(const next of visited) {
            if(info[next]) {
                if(sheep !== wolf + 1) {
                    const newVisited = new Set(visited);
                    newVisited.delete(next);
                    q.push([next, sheep, wolf + 1, newVisited])
                }
            } else {
                const newVisited = new Set(visited);
                newVisited.delete(next);
                q.push([next, sheep + 1, wolf, newVisited])
            }
        }
    }
    return maxSheep
}
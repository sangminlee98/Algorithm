class Queue {
    constructor() {
        this.items = [];
        this.front = 0;
        this.rear = 0;    
    }
    
    push(item) {
        this.items.push(item);
        this.rear++;
    }
    pop() {
        return this.items[this.front++];
    }
    isEmpty() {
        return this.front === this.rear;
    }
}

function isValidPath(ny, nx, n, m, maps) {
    return ny >= 0 && ny < n && nx >= 0 && nx < m && maps[ny][nx] !== "X"
}

function appendToQueue(ny, nx, k, time, visited, q) {
    if(!visited[ny][nx][k]) {
        visited[ny][nx][k] = true;
        q.push([ny, nx, k, time + 1]);
    }
}

function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const visited = Array.from(Array(n), () => Array(m).fill(false).map(() => Array(2).fill(false)));
    const dx = [0, 0, -1, 1];
    const dy = [1, -1, 0, 0];
    
    const q = new Queue();
    
    let endX = -1;
    let endY = -1;
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(maps[i][j] === "S") {
                q.push([i, j, 0, 0]);
                visited[i][j][0] = true;
            }
            if(maps[i][j] === "E") {
                endX = j;
                endY = i;
            }
        }
    }
    
    while(!q.isEmpty()) {
        const [y, x, k, time] = q.pop();
        
        if(x === endX && y === endY && k === 1) return time;
        
        for(let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            if(!isValidPath(ny, nx, n, m, maps)) continue;
            
            
            if(maps[ny][nx] === "L") {
                appendToQueue(ny, nx, 1, time, visited, q)
            } else {
                appendToQueue(ny, nx, k, time, visited, q)    
            }
            
        }
    }
    
    return -1;
}

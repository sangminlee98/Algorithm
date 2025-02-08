function validateDir(x, y, dir) {
    switch (dir) {
        case "U":
            return [x, y+1];
            break;
        case "D":
            return [x, y-1];
            break;
        case "L":
            return [x-1, y];
            break;
        case "R":
            return [x+1, y];
            break;
        default: 
            return [x, y]
    }
}

function solution(dirs) {
    const visited = new Set();
    let x = 0;
    let y = 0;
    
    for(const dir of dirs) {
        const [nx, ny] = validateDir(x, y, dir);
        
        if(nx < -5 || nx > 5 || ny > 5 || ny < -5) {
            continue;
        }
       
        visited.add(`${x}${y}${nx}${ny}`);
        visited.add(`${nx}${ny}${x}${y}`);
        
        [x, y] = [nx, ny]
    }
    
    return visited.size / 2;
}
function solution(n, k, cmd) {
    const deleted = [];
    const up = Array.from({length: n+2}, (_, i) => i - 1);
    const down = Array.from({length: n+2}, (_, i) => i + 1);
    
    k += 1;
    
    for(const item of cmd) {
        if(item[0] === "C") {
            deleted.push(k);
            up[down[k]] = up[k];
            down[up[k]] = down[k];
            k = n < down[k] ? up[k] : down[k];
        }
        else if(item[0] === "Z") {
            const restore = deleted.pop();
            down[up[restore]] = restore;
            up[down[restore]] = restore;
        }
        else {
            const [action, num] = item.split(" ");
            for(let i = 0; i < num; i++) {
                if(action === "U") k = up[k];
                else k = down[k];
            }
        }
    }
    const answer = new Array(n).fill("O");
    for(const i of deleted) {
        answer[i-1] = "X";
    }
    return answer.join("");
}

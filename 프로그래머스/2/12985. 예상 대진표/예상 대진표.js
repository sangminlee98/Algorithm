function solution(n,a,b) {
    const tree = new Array(n * 2 - 1).fill(0);
    for(let i = tree.length - 1; i >= n-1; i--) {
        tree[i] = n - (tree.length - 1 - i);
    }
    
    let cnt = 0;
    let aIdx = tree.findIndex(el => el === a)
    let bIdx = tree.findIndex(el => el === b)
    
    while(true) {
        cnt++;
        const parentA = aIdx % 2 === 0 ? aIdx / 2 - 1 : (aIdx - 1) / 2;
        const parentB = bIdx % 2 === 0 ? bIdx / 2 - 1 : (bIdx - 1) / 2;
        if(parentA !== parentB) {
            aIdx = parentA;
            bIdx = parentB;
        } else {
            break;
        }
    }
    
    return cnt;
}
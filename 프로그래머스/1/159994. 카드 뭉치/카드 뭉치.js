function solution(cards1, cards2, goal) {
    let answer = true;
    for(let i = 0; i < goal.length; i++) {
        const char = goal[i];
        if(cards1[0] === char) {
            cards1.shift();
            continue;
        } else if(cards2[0] === char) {
            cards2.shift();
            continue;
        } else {
            answer = false;
            break;
        }
    }
    return answer ? "Yes" : "No";
}
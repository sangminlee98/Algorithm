function solution(sequence, k) {
    let answer;
    let l = 0;
    let sum = 0;
    let min = Number.MAX_SAFE_INTEGER;
    for(let r = 0; r < sequence.length; r++) {
        sum += sequence[r];
        while(sum > k) {
            sum -= sequence[l];
            l++;
        }
        if(sum === k) {
            if(r - l < min) {
                min = r - l;
                answer = [l, r];
            }
        }
    }
    return answer;
}
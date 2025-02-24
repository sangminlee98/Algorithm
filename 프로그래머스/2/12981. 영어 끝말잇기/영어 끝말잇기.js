function solution(n, words) {
    const set = new Set();
    let s;
    for(let i = 0; i < words.length; i++) {
        const turn = Math.floor(i / n) + 1;
        const userNum = i % n + 1;
        
        const word = words[i];
        if(set.has(word) || (s && s !== word[0])) return [userNum, turn];
        
        s = word[word.length-1];
        set.add(word);
    }
    return [0, 0]
}
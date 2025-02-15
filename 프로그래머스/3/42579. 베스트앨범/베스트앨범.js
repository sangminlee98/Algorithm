function solution(genres, plays) {
    const dataObj = {};
    for(let i = 0; i < genres.length; i++) {
        const genre = genres[i];
        const play = plays[i];
        
        if (!dataObj[genre]) {
            dataObj[genre] = {
                data: [],
                total: 0
            };
        }
        dataObj[genre].data.push({index: i, play});
        dataObj[genre].total += play;
    }
    
    const sortedObj = Object.fromEntries(Object.entries(dataObj).sort(([_1, a],[_2, b]) => b.total - a.total));
    
    Object.values(sortedObj).forEach(genre => genre.data.sort((a,b) => b.play - a.play))
    
    const answer = [];
    
    Object.values(sortedObj).forEach(genre => {
        for(let i = 0; i < genre.data.length; i++) {
            if(i > 1) break;
            answer.push(genre.data[i].index)
        }
    })
    return answer
}
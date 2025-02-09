function solution(board, moves) {
    const basket = [];
    for(let i = 0; i < moves.length; i++) {
        for(let j = 0; j < board.length; j++) {
            if(board[j][moves[i]-1] === 0) continue;
            else {
                basket.push(board[j][moves[i]-1]);
                board[j][moves[i]-1] = 0;
                break;
            }
        }
    }
    const stack = [];
    const answer = [];
    for(const doll of basket) {
        if(stack.length > 0 && stack[stack.length -1] === doll) {
            answer.push(doll);
            answer.push(stack.pop());
        } else {
            stack.push(doll);
        }
    }
    return answer.length;
}
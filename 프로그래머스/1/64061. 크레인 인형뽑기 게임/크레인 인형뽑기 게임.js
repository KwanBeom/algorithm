function solution(board, moves) {
    let answer = 0;
    const stack = [];
    
    for(let i=0; i<moves.length; i++) {
        const move = moves[i];
        
        for(let row=0; row<board.length; row++) {
            const target = board[row][move-1];
            if(target === 0) continue;
            
            const lastEl = stack[stack.length - 1];
            board[row][move - 1] = 0;
            stack.push(target);
            if(lastEl === target) {
                stack.pop();
                stack.pop();
                answer+=2;
            }
            break;
        }
    }

    return answer;
}
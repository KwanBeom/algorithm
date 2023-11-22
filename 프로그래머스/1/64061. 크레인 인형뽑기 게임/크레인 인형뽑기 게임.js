function solution(board, moves) {
    let result = 0;
    const stack = [];

    moves.forEach((number, index) => {
        board.some((dataArr, idx) => {
            const target = dataArr[number - 1];
            if(dataArr[number - 1]) {
                board[idx][number - 1] = 0;
                
                if (stack[stack.length - 1] === target) {
                    stack.pop();
                    result += 2;
                } else {
                    stack.push(target);
                }
                
                return true;
            }
        })
    })
    
    return result;
}
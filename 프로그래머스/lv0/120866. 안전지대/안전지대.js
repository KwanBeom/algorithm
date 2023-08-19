function solution(board) {
    let bombSector = []

    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[i].length; j++){
            if(board[i][j]) bombSector.push([i,j])
        }
    }
    
    for(i of bombSector){
        for(let j = i[0] - 1; j <= i[0] + 1; j++){
            for(let k = i[1] - 1; k <= i[1] + 1; k++){
                if(j >= 0 && j < board.length && k >= 0 && k < board[j].length) {
                    board[j][k] = 1
                }
            }
        }
    }

    return board.map(v => v.filter(item => item === 0)).flat().length
}

function solution(board, k) {
    var answer = 0;
    board.map((item, index) => {
        item.map((v, idx) => {
            if(idx + index <= k) answer += v
        })
    })
    return answer;
}
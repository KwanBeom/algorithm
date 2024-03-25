function solution(lottos, win_nums) {
    const winningRanking = {
        [6]: 1,
        [5]: 2,
        [4]: 3,
        [3]: 4,
        [2]: 5,
        [1]: 6,
        [0]: 6,
    };
    let unrecognizableCount = 0;
    
    const correctCount = lottos.reduce((acc, cur) => {
        if(cur === 0) unrecognizableCount += 1;
        return acc += win_nums.includes(cur);
    }, 0)

    return [
        winningRanking[correctCount + unrecognizableCount], 
        winningRanking[correctCount],
    ];    
}
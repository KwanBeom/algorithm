function solution(dartResult) {
    const scores = [];
    
    const bonuses = {
        S: 1, D: 2, T: 3,
    };
    
    [...dartResult].forEach((v, i) => {
        const bonus = bonuses[v];
        
        if(bonus) {
            const receiveScore = Math.pow(
                dartResult[i-2] === '1' ? 10 : dartResult[i - 1], bonus
            );
            let finalScore = receiveScore;
            
            if(dartResult[i+1] === '#') finalScore *= -1;

            if(dartResult[i+1] === '*') {
                scores[scores.length - 1] *= 2;
                finalScore *= 2;
            }
            
            scores.push(finalScore);
        }
    })
    
    return scores.reduce((acc, cur) => acc + cur);
}
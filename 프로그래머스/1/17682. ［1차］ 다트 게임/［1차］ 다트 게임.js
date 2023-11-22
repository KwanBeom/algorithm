function solution(dartResult) {
    const receivedScore = [];
    
    const bonuses = {
        S: 1, D: 2, T: 3,
    };
    
    [...dartResult].forEach((v, i) => {
        const bonus = bonuses[v];
        
        if(bonus) {
            const score = Math.pow(dartResult[i-2] === '1' ? 10 : dartResult[i - 1], bonus);
            let receive = score;
            
            if(dartResult[i+1] === '#') receive *= -1;

            if(dartResult[i+1] === '*') {
                receivedScore[receivedScore.length - 1] *= 2;
                receive *= 2;
            }
            
            receivedScore.push(receive);
        }
    })
    
    return receivedScore.reduce((acc, cur) => acc + cur);
}
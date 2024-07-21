function solution(brown, yellow) {
    const cases = [];
    const s = brown + yellow;
    
    for(let i=0; i<brown/2; i++) {
        for(let j=0; j<brown/2; j++) {
            if(i * j === s && i >= j) {
                if((i + j - 2) * 2 === brown) {
                    return [i,j];
                }
            }
        }
    }
}
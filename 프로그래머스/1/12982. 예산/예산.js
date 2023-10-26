function solution(d, budget) {
    let result;
    try {
        d.sort((a,b) => a-b).forEach((v, i) => {
            budget -= v;
            if (budget < 0) {
                result = i;
                throw new Error("stop loop");
            } else if (budget === 0) {
                result = i + 1;
                throw new Error("stop loop");
            } else if (i + 1 === d.length) {
                result = i + 1;
            }
        });
    } catch (e) {
        
    }
    
    
    return result;
}
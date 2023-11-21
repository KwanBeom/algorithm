function solution(N, stages) {
    const arr = [];
    
    for(let stage = 1; stage <= N; stage++) {
        const tryUser = stages.filter((v) => v >= stage).length;
        const leftUser = stages.filter((v) => v === stage).length;
        
        arr.push([stage, leftUser / tryUser]);
    }
    
    return arr.sort((a, b) => b[1] - a[1]).map((v) => v[0]);
}
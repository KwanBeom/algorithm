function solution(N, stages) {
    let failureRate = [];
    for (let i = 1; i <= N; i++) {
        failureRate.push([i, stages.filter(v => v === i).length / stages.filter(v => v >= i).length]);
    }
    
    return failureRate.sort((a, b) => b[1] - a[1]).map((v) => v[0]);
}
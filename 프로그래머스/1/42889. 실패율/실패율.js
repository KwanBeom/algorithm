function solution(N, stages) {
    const count = [];

    for (let i = 1; i <= N; i++) {
        const failUserCount = stages.filter(v => v === i).length;
        const overOrEqualUserCount = stages.filter(v => v >= i).length; 
        count.push([i, failUserCount / overOrEqualUserCount])
    }
    
    return count.sort((a, b) => b[1] - a[1]).map((v, i) => v[0]);
}

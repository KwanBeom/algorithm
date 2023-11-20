function solution(N, stages) {
    const count = new Array(N).fill().map((_,i) => [i + 1, 0]);

    for (let i = 1; i <= N; i++) {
        const failUserCount = stages.filter(v => v === i).length;
        const overOrEqualUserCount = stages.filter(v => v >= i).length;

        if(overOrEqualUserCount === 0) {
            count[i - 1][1] = 0;
        } else {
            count[i - 1][1] = failUserCount / overOrEqualUserCount;
        }
    }
    
    return count.sort((a, b) => {
        if (b[1] - a[1] === 0) return a[0] - b[0];
        return b[1] - a[1];
    }).map((v) => v[0]);
}

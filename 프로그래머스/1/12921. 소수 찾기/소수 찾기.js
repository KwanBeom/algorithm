function solution(n) {
    const answer = new Array(n + 1).fill(true).fill(false, 0 , 2);
    
    for(let i=2; i**2 <= n; i++) {
        if(answer[i]) {
            for(let j=i**2; j<=n; j+=i) {
                answer[j] = false;
            }
        }
    }
    
    return answer.filter(Boolean).length;
}
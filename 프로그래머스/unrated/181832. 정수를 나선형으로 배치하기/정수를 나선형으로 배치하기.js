function solution(n) {
    const answer = Array(n).fill().map(v => Array(n).fill(0));
    let num = 1;
    let time = 1;
    while(num <= n*n){
        for(let i=time-1; i<=n-time; i++){
            answer[time-1][i] = num++;  
        } 
        for(let i=time; i<=n-time; i++){
            answer[i][n-time] = num++; 
        } 
        for(let i=n-time-1; i>=time-1; i--) {
            answer[n-time][i] = num++;
        }
        for(let i=n-time-1; i>=time; i--) {
            answer[i][time-1] = num++;
        }
        
        time++;
    }
    return answer;
}

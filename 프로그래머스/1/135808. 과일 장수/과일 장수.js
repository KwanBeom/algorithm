function solution(k, m, score) {
    let answer = 0;
    const sortArr = [...score].sort((a,b) => b-a);

    for(let i = m; i <= score.length; i += m){
        const cost = Math.min(...sortArr.slice(i-m, i));
        answer += cost * m;
    }
    
    return answer;
}
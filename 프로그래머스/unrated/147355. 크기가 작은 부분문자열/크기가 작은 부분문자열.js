function solution(t, p) {
    var answer = 0;
    for(let i=0; i<=t.length - p.length; i++){
        p >= t.slice(i, i+p.length) && answer++;
    }
    return answer;
}
function solution(a, b) {
    let num = 0;
    for(let i=Math.min(a,b); i<=Math.max(a,b); i++){
        num+=i
    }
    return num;
}
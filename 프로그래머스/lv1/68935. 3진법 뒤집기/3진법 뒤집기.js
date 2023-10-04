function solution(n) {
    let answer = 0;
    n = [...n.toString(3)].map((v,i) => {
        if(i===0 && v==1) answer+=1;
        else answer += Math.pow(3, i) * v
    })
    return answer
}
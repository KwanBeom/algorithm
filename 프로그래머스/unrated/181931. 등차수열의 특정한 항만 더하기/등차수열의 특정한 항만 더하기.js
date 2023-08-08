function solution(a, d, included) {
    var answer = 0;
    const arr = []
    let num = Number(a)
    for(let i=0; i<included.length; i++){
        if(included[i]) answer += a + (d*i)
    }
    
    return answer;
}
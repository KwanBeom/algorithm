function solution(emergency) {
    const arr = [...emergency].sort((a, b) => b - a);
    const answer = [...emergency]
    
    arr.map((v, index) => {
        answer[emergency.indexOf(v)] = index + 1;
    })
    return answer
}
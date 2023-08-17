function solution(emergency) {
    const arr = [...emergency].sort((a, b) => a - b)
    let num = emergency.length
const answer = [...emergency]
    arr.map((v, index) => {
        answer[emergency.indexOf(v)] = num;
        num--;
    })
    return answer
}
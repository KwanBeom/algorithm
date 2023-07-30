function solution(intStrs, k, s, l) {
    var answer = [];
    intStrs.map(item => {
        answer.push(1 * item.slice(s, s+l))
    })
    return answer.filter(item => item > k);
}
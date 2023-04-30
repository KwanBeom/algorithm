function solution(n) {
    var answer = 0;
    n.toString().split('').forEach(item => {answer += Number(item)});
    return answer
}
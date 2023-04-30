function solution(start, end) {
    var answer = [];
    for(let i = end; i <= start; i++){
        answer.unshift(i)
    }
    return answer;
}
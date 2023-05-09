function solution(array) {
    var answer = [];
    const max = Math.max(...array)
    answer.push(max)
    answer.push(array.findIndex(el => el===max))
    
    return answer;
}
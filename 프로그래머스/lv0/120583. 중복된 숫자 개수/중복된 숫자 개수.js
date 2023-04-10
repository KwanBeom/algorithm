function solution(array, n) {
    var answer = array.filter(a => a == n);
    return answer.length;
}
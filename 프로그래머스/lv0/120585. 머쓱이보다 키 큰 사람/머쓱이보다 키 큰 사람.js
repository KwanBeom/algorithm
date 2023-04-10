function solution(array, height) {
    var answer = array.filter(a => height < a).length;
    return answer;
}
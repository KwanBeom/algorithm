function solution(n, k) {
    let a = n/10;
    var answer = (n * 12000) + (k * 2000) - parseInt(n/10) * 2000
    return answer;
}
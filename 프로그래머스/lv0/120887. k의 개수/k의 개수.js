function solution(i, j, k) {
    var answer = 0;
    for(let num = i; num <= j; num++){
        if(String(num).includes(k)) {
           result = String(num).split('').filter(item => (1 * item) === 1 * k)
            answer += result.length
        }
    }
    return answer;
}
function solution(money) {
    var answer = [];
    let a = Math.floor(money / 5500)
    let b = money % 5500
    answer.push(a,b)
    return answer;
}
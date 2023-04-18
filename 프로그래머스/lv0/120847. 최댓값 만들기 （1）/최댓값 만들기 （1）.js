function solution(numbers) {
    let arr = numbers.sort((a, b) => a - b)
    let x = arr.pop()
    let y = arr.pop()
    var answer = 0;
    return answer = x*y;
}
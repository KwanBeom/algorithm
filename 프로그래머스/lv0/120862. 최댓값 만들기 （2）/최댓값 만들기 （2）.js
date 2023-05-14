function solution(numbers) {
    var answer = 0;
    numbers.sort((a,b) => b-a)
    return Math.max(numbers[0] * numbers[1], numbers[numbers.length-1] * numbers[numbers.length-2])
}
function solution(numbers) {
    return (10*(10-1))/2 - numbers.reduce((a,c) => a+c, 0)
}
function solution(numbers) {
    var answer = numbers.reduce((acc, cur) => {
        return acc + cur;
    }, 0);
    const result = answer / numbers.length;
    return result;
}
function solution(num_list) {
    var answer = 0;
    let b = 1

    let a = num_list.reduce((acc, cur) => {
        return acc + cur
    }) ** 2
    num_list.forEach(item => {
        b *= item
    })
    answer = a > b ? 1 : 0
    return answer
}
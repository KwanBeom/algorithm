function solution(num_list) {
    return num_list.filter(item => item % 2 === 1).join('')*1 + num_list.filter(item => item % 2 === 0).join('')*1
}
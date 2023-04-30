function solution(my_string, index_list) {
    let answer = ''
    index_list.forEach(item => {
        answer += my_string.substr(item, 1)
    })
    return answer
}
function solution(num_list) {
    var answer = [...num_list];
    const a = num_list.pop()
    const b = num_list.pop()
    a > b ? answer.push(a - b) : answer.push(a * 2)
    return answer;
}
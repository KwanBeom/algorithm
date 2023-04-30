function solution(num_list) {
    return num_list.reduce((acc, cur) => {
        return num_list.length > 10 ? acc + cur : acc * cur
    })
}
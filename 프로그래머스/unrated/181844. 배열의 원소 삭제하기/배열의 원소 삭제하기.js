function solution(arr, delete_list) {
    return arr.filter(item => {
        return !delete_list.includes(item)
    })
}
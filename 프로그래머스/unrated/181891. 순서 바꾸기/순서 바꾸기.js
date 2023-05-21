function solution(num_list, n) {
    for(let i=0; i<n; i++){
        let a = num_list.shift()
        num_list.push(a)
    }
    return num_list
}
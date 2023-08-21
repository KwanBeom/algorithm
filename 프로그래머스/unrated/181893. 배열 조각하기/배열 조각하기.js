function solution(arr, query) {
    query.map((v, idx) => {
        if(idx % 2 === 0){
            arr.splice(v + 1, arr.length)
        } else {
            arr.splice(0, v)
        }
    })
    return arr
}
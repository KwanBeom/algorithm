function solution(arr, k) {
    const array = []
    arr.map(num => !array.includes(num) ? array.push(num) : '')
    for(let i=array.length; i<=k; i++) array.push(-1)
    array.length = k
    return array
}
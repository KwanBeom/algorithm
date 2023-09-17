function solution(arr, k) {
    const array = []
    arr.map(num => !array.includes(num) ? array.push(num) : '')
    while(array.length < k) array.push(-1)
    array.length = k
    return array
}
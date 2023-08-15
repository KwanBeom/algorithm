function solution(arr, queries) {
    queries.map(([start, end]) => {
        [arr[start], arr[end]] = [arr[end], arr[start]]
    })
    
    return arr;
}
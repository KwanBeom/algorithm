function solution(arr, queries) {
    queries.forEach(([start, end]) => {
        [arr[start], arr[end]] = [arr[end], arr[start]]
    })
    
    return arr;
}
function solution(arr, queries) {
    queries.map(item => {
        const start = item[0];
        const end = item[1];
        [arr[start], arr[end]] = [arr[end], arr[start]]
    })
    
    return arr;
}
function solution(arr, intervals) {
    var answer = [];
    const a = [...intervals[0]]
    const b = [...intervals[1]]
    return [...arr.slice(a[0],a[1]+1), ...arr.slice(b[0], b[1]+1)]
    return answer;
}
function solution(s) {
    const arr = JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']')).sort((a,b) => a.length - b.length)
    const set = new Set(arr.flat());
    return [...set]
}
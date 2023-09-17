function solution(arr, k) {
    const set = new Set(arr)
    return set.size > k ? [...set].slice(0, k) : [...set, ...Array(k - set.size).fill(-1)] 
}
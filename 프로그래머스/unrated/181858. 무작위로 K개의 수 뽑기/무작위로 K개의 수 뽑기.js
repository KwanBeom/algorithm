function solution(arr, k) {
    const array = []
    arr.map(num => !array.includes(num) ? array.push(num) : '')

    
    return array.length > k ? [...array].slice(0, k) : [...array, ...Array(k - array.length).fill(-1)]
}
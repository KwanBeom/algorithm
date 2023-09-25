function solution(arr, divisor) {
    const filterArray = arr.filter(num => !(num % divisor)).sort((a,b) => a-b)
    return filterArray.length ? filterArray : [-1];
}
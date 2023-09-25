function solution(numlist, n) {
    return numlist.sort((a,b) => Math.abs(b-n) - Math.abs(a-n)  || a - b).reverse()
}
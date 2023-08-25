function solution(n) {
    if(Math.sqrt(n) === Math.round(Math.sqrt(n))) return (Math.sqrt(n)+1) ** 2
    else return -1
}
function solution(n) {
    const num = n**0.5;
    if(Math.round(num) === num) return (num+1) ** 2
    else return -1
}
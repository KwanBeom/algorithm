function solution(balls, share) {
    return Math.round(factorial(balls) / (factorial(balls-share) * factorial(share)))
}

const factorial = (num) => {
    let n = 1;
    for(let i=2; i<=num; i++) n*=i
    return n;
}
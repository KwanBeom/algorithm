const countDivisors = (num) => {
    let cnt = 0;
        for(let i=1; i<=Math.sqrt(num); i++) {
            if(num % i === 0) {
                if(num / i === i) {
                    cnt += 1;                        
                } else {
                    cnt += 2;
                }
            }
        }
        return cnt
}
    
function solution(number, limit, power) {
    return new Array(number)
        .fill()
        .map((_, index) => {
            const divisors = countDivisors(index+1)
            return divisors > limit ? power : divisors;
        })
        .reduce((acc,cur) => acc+cur, 0);
}
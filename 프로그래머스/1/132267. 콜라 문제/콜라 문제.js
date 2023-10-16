function solution(a, b, n) {
    let coke = 0;
    while(n >= a){
        const left = Math.floor((n/a)) * b
        coke += left;
        n = left + n%a;
    }
    return coke;
}
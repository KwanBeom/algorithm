function solution(n) {
    let result = 0;
    for(let i=0; i<=n; i++){
        if(i%2 && n%2) result += i
        else if(!(i%2) && !(n%2)) result += i**2
    }
    return result
}
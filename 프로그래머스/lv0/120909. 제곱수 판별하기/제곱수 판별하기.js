function solution(n) {
    let 약수 = 0
    for(let i=0; i <= n; i++){
        if(n % i === 0){
            약수++;    
        }
    }
    return 약수 % 2 === 1 ? 1 : 2
}
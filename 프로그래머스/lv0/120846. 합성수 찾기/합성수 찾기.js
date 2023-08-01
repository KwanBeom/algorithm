function solution(n) {
    var answer = 0;
    const arr = []
    for(let i=0; i<=n; i++){
        arr.push(i);
    }
    
    return arr.filter(item => {
        let 약수 = 0;
        for(let i=0; i<=item; i++){
            if(item % i === 0) 약수++
        }
        return 약수 >= 3
    }).length
}
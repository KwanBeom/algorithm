function solution(a, b) {
    const 인수 = [];
    let 최대공약수 = 1;
    for(let i=2; i<b; i++) if (a%i===0 && b%i===0) 최대공약수 = i;
    a/=최대공약수;
    b/=최대공약수;
    for(let i=1; i<=b; i++){
        for(let j=1; j<=b; j++){
            if(i*j === b) 인수.push(i,j)
        }
    }

    const 소인수 = [...new Set(인수)].filter(num => {
          for(let i=2; i<num; i++) {
            if(num % i === 0) {
                return false;
            }
        }
        return num > 1;
    })
    
    if(소인수.includes(2) || 소인수.includes(5)){
        return 소인수.filter(num => num !== 2 && num !== 5).length ? 2 : 1;
    }
    return 2
}
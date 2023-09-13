function solution(n) {
    let 십진법 = 1;
    let 마을숫자 = 0;
    
    while(십진법 <= n){        
        십진법++;
        마을숫자++;
        while(마을숫자%3===0 || 마을숫자.toString().includes(3)) 마을숫자++;
    }
        
    return 마을숫자 ;
}
function solution(chicken) {
    let coupon = parseInt(chicken/10);
    const 나머지쿠폰 = Math.round(((chicken/10) - Math.floor(chicken/10)) * 10);
    let service = parseInt(chicken/10);
    
    while(coupon >= 10){
        coupon-=10;
        service++;
        coupon++;
    }

    return (service + Math.floor((coupon + 나머지쿠폰)/10))
}
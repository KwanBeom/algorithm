function gcd(a,b){
    return b ? gcd(b, a % b) : a;
}

function lcd(a,b){
    return a*b/gcd(a,b);
}

function solution(arr) {
    return arr.reduce((acc,cur)=>lcd(acc,cur));
}
function solution(n) {
    let arr=[];
    if(n % 2 === 1){
        for(let i=n; i>=0; i-=2){
            arr.push(i);
        }
    } else {
        for(let i=n; i>=0; i-=2){
            arr.push(i**2);
        }
    }
    return arr.reduce((acc,cur) => acc+cur)
}
function solution(l, r) {
    var answer = [];
    for(let i=l; i<=r; i++){
        if(i.toString().replace(/0|5/g, '') === '') answer.push(i)
    }
    return answer.length ? answer : [-1];
}
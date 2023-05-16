function solution(s){
    let a = [...s].filter(item => item==='p' || item==='P')
    let b = [...s].filter(item => item==='y' || item==='Y')
    return a.length === b.length ? true : false;
}
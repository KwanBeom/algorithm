function solution(s){
    return [...s].filter(item => item==='p' || item==='P').length === [...s].filter(item => item==='y' || item==='Y').length ? true : false;
}
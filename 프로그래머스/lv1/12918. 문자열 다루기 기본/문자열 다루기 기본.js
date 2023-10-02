function solution(s) {
    const reg = /[a-zA-Z]/g
    if(s.length === 4 || s.length === 6){
        return !reg.test(s)    
    } else {
        return false
    }
}
function solution(n, control) {
    control.split('').forEach(item => {
        (item === "w" ? n+=1 : 
        item === "s" ? n-=1 :
        item === "d" ? n+=10 :
        item === "a" ? n-=10 : 0)
    })
    return n
}
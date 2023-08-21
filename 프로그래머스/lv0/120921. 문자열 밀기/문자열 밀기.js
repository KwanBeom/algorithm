function solution(A, B) {
    if(A === B) return 0
    const arr = [...A]
    let result = -1
    for(let i=0; i<A.length; i++){
        arr.unshift(arr.pop())
        console.log(arr.join(''),B)
        
        if(arr.join('') === B) {
            result = i + 1;
            break;
        }
    }
    
    return result
}

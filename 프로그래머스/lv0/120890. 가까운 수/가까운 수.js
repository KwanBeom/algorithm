function solution(array, n) {
    let answer = 0;
    const left = [];
    const right = [];
    
    for(let i = 0; i < array.length; i++){
        if(array[i] === n) return n;
        
        if(array[i] > n) right.push(array[i])
        else left.push(array[i])
    }


    
    const small = left.sort((a,b) => a-b)[left.length - 1];
    const big = right.sort((a,b) => a-b)[0]
    
    if(n - small === big - n) answer = small || big
    else if(n - small > big - n) answer = big || small
    else answer = small || big
    
    return answer
}
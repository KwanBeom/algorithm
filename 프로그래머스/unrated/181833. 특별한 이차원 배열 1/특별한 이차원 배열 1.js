function solution(n) {
    const answer = [];
    const arr = new Array(n);
    arr.fill(0,0,n)
    
    for(let i=0; i<n; i++){
        const newArr = arr.slice()
        answer.push(newArr)
    }
    
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            i === j ? answer[i][j] = 1 : undefined
        }
    }
    
    
    
    
    return answer;
}
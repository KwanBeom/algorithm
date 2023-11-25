function solution(answers) {
    const answer = [[1,2,3,4,5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
    const result = [0,0,0];
    answers.forEach((value, index) => {
        for(let i=0; i<answer.length; i++){
            if(answer[i][index % answer[i].length] === value) result[i]++;
        }
    })
    
    return result.map((v,i) => {
        if(v === Math.max(...result)) return i+1
    }).filter(Number)
}
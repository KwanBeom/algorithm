function solution(lines) {
    const test = new Array(3);
    let min = 0;
    for(let i=0; i<=2; i++){
        test[i] = new Array(calcLength([Math.min(lines[0][0], lines[1][0], lines[2][0]),Math.max(lines[0][1], lines[1][1], lines[2][1])])).fill(0);
        if(Math.min(...lines[i]) < min) min = Math.min(...lines[i])
    }
    
    
    lines.map(([start, end]) => min === 0 ? [start, end] : [start -= min, end -= min])
        .map(([start, end], i) => {
        for(let j=start; j<end; j++) test[i][j] = 1;
    })
    
    let answer = 0;
    for(let i=0; i<test[0].length; i++){
        if((test[0][i] && test[1][i]) || (test[0][i] && test[2][i]) || (test[1][i] && test[2][i])) answer++;
    }
    
    return answer
}

const calcLength = (arr) => {
    return Math.max(...arr) - Math.min(...arr);
}
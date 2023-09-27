function solution(lines) {
    let answer = 0;
    const start = Math.min(lines[0][0], lines[1][0], lines[2][0]);
    const end = Math.max(lines[0][1], lines[1][1], lines[2][1]);
    const arr = new Array(3);
    let min = 0;
    for(let i=0; i<=2; i++){
        arr[i] = new Array(Math.max(start, end) - Math.min(start, end)).fill(0);
        if(Math.min(...lines[i]) < min) min = Math.min(...lines[i])
    }
    
    
    lines.map(([start, end]) => min === 0 ? [start, end] : [start -= min, end -= min])
        .map(([start, end], i) => {
        for(let j=start; j<end; j++){
            arr[i][j] = 1
        }
    })
    
    for(let i=0; i<arr[0].length; i++){
        if((arr[0][i] && arr[1][i]) || (arr[0][i] && arr[2][i]) || (arr[1][i] && arr[2][i])) answer++;
    }
    
    return answer
}
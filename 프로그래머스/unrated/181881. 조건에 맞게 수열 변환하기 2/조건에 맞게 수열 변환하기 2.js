function solution(arr) {
    var answer = 0;
    let prev = arr;
    while(true){
        const mapArr = prev.map(v => {
            const odd = v%2===0&&v>=50;
            const even = v%2===1&&v<50;
            if(odd) return v/2
            else if(even) return v*2+1
            else return v
        })
        if(JSON.stringify(mapArr) === JSON.stringify(prev) || arr.length===1) break;
        arr = mapArr;
        prev = mapArr; 
        answer++;
    }
    return answer;
}
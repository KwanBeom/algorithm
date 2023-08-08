function solution(a, d, included) {
    var answer = 0;
    const arr = []
    let num = Number(a)
    for(let i=0; i<included.length; i++){
        arr.push(num);
        num = num + d;
    }
    arr.map((item, idx) => {
        if(included[idx]) answer += item
    })
    
    return answer;
}
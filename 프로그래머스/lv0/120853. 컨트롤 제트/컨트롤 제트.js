function solution(s) {
    const arr = s.split(' ');

    s.split(' ').map((v, idx) => {
        if(v === 'Z') arr[idx - 1] = 0
    })
    
    return arr.filter(v => v * 1).reduce((acc,cur) => 1*acc+1*cur, 0)
}
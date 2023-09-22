function solution(arr) {
    const leng = Math.max(arr.length, ...arr.map(v => v.length));

    arr.map(v => {while(v.length !== leng) v.push(0)})
    while(leng !== arr.length) arr.push(new Array(arr[0].length).fill(0))
    
    return arr
}
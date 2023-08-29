function solution(arr, queries) {
    queries.map((query,idx) => {
        const s = query[0], e = query[1], k = query[2];
        for(let i=s; i<=e; i++){
            if(i % k === 0) arr[i]++;
        }
    })  
    return arr
}
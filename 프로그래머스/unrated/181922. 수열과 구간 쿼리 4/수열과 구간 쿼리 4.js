function solution(arr, queries) {
    // for([s,e,k] of queries) {
    //     for(let i=s; i<=e; i++){
    //         if(i % k === 0) arr[i]++;
    //     }
    // }

    queries.map(v => {
        const [s,e,k] = v
        for(let i=s; i<=e; i++){
            if(i % k === 0) arr[i]++;
        }
    })  
    
    return arr
}
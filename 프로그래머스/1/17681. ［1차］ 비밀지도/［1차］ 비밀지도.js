function solution(n, arr1, arr2) {
    const result = new Array(n)
    for(let i=0; i<n; i++){
        const arr = [...(arr1[i] | arr2[i]).toString(2)];
        if(arr.length < n){
            while(arr.length!==n){
              arr.unshift(0)  
            }
        }
        result[i] = arr.map(v=> 1*v ? '#' : ' ').join('');
    }
    return result
}
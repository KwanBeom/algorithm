function solution(arr) {
    let i = 0;
    const stk = [];
    while(i<arr.length){
        if(stk.length === 0){
            stk.push(arr[i]);
            i++;
        } else if (stk[stk.length-1] === arr[i]){
            stk.pop();
            i++;
        } else if (stk[stk.length-1] !== arr[i]) {
            stk.push(arr[i])
            i++;
        }
    }
    
    return stk.length ? stk : [-1];
}
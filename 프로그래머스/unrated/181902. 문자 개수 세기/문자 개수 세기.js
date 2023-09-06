function solution(my_string) {
    const arr = new Array(52).fill(0)
    const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    [...my_string].map((v,i) => {
        arr[str.indexOf(v)]++;
    })
    return arr;
}
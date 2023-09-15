function solution(my_string, queries) {
    for(let [s,e] of queries){
        my_string = my_string.slice(0, s) + [...my_string.slice(s, e+1)].reverse().join('') + my_string.slice(e+1, my_string.length)
    }
    return my_string;
}
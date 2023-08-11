function solution(my_string, m, c) {
    var answer = '';
    const arr = []
    for(let i=0; i<my_string.length; i+=m){
    const str = my_string.slice(i, i+m)
        arr.push(str)
    }
    arr.map(item => answer+=item[c-1])
    return answer;
}
function solution(my_string) {
    var answer = [];
    let cur = ''
    let realcur = ''
    for(let i=my_string.length-1; i>=0; i--){
        cur += my_string[i]
        realcur = cur.split('').reverse().join('')
        answer.push(realcur)
    }
    return answer.sort((a,b) => a.localeCompare(b));
}
function solution(age) {
    var answer = '';
    let newAge=age.toString()
    for(let i=0; i<newAge.length; i++){
        let str = 'abcdefghijklmnopqrstuvwxyz'
        let num = newAge[i]
        answer += str[num]
    }
    return answer;
}
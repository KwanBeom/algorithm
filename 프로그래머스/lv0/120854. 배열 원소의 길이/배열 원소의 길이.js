function solution(strlist) {
    var answer = [];
    for(let i=0; i < strlist.length; i++){
        let len = strlist[i]
        answer.push(len.length);
    }
    return answer;
}
function solution(cipher, code) {
    var answer = '';
    for(let i = code-1; i < cipher.length; i+=code){
        answer += cipher.substr(i, 1)
    }
    return answer;
}
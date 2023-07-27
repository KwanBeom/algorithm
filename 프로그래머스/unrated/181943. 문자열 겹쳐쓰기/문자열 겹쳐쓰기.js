function solution(my_string, overwrite_string, s) {
    var answer = '';
    answer = my_string.split('')
    for(let i=0; i<overwrite_string.length; i++){
        answer.splice(i+s, 1, overwrite_string[i])
    }
    
    return answer.join('')
}
function solution(my_string) {
    var answer = '';
    let arr = [...my_string].filter(e => e !== 'a' && e !== 'e' && e !== 'o' && e !== 'u' && e !== 'i')
    answer = arr.join('')
    return answer;
}
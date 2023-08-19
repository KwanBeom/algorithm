function solution(my_string, s, e) {
    const slice = my_string.slice(s, e + 1)
    const reverseStr = slice.split('').reverse().join('');
    
    return my_string.replace(slice, reverseStr)
}
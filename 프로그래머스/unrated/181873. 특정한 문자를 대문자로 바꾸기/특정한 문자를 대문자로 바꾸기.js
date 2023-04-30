function solution(my_string, alp) {
    let idx = my_string.indexOf(alp)
    let str = my_string[idx]
    return my_string.split('').map(item => item === str ? str.toUpperCase() : item).join('')
}
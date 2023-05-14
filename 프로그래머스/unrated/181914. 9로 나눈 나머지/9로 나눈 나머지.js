function solution(number) {
    return number.split('').reduce((acc,cur) => 1*acc+1*cur) % 9
}
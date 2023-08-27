function solution(x) {
    return (x % (x.toString().split('').reduce((acc,cur) => 1*acc+1*cur, 0) * 1)) === 0
}
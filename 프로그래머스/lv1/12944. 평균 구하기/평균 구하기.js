function solution(arr) {
    var answer = 0;
    return arr.reduce((acc,cur) => acc+cur)/arr.length
}
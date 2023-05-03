function solution(my_string) {
    return [...my_string].filter(item => item >= 0).map(item => Number(item)).sort((a,b) => a - b)
}
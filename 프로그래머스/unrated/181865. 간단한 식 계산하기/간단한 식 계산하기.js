function solution(binomial) {
    var answer = 0;
    const arr = binomial.split(' ')
    switch(arr[1]){
        case '+':
            answer = 1 * arr[0] + 1 * arr[2]
            break;
        case '-':
            answer = arr[0] - arr[2]
            break;
        case '*':
            answer = arr[0] * arr[2]
            break;
        default:
            break;
    }
    
    return answer;
}
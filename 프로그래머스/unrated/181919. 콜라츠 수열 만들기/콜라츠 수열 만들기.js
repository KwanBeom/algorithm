function solution(n) {
    var answer = [n];
    let number = n;
    while(number>=1){
        if(number%2===0){
            number = number/2
        }else if(number%2===1){
            number = 3 * number + 1
        }
        answer.push(number)
        if(number===1){
            break;
        }
    }
    
    return answer;
}
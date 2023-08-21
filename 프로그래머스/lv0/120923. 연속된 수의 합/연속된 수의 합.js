function solution(num, total) {
    var answer = new Array(num);
    let leftNum = total / num;
    let rightNum = total / num;
    if(total / num === Math.floor(total / num)){
        for(let i=Math.round(num/2); i>=0; i--){
            answer[i - 1] = leftNum;
            leftNum--;
        }
        for(let i=Math.floor(answer.length/2); i<num; i++){
            answer[i] = rightNum;
            rightNum++;
        }
    } else {
        leftNum = Math.floor(leftNum)
        rightNum = Math.floor(rightNum)
        
        for(let i=Math.floor(num/2); i>=0; i--){
            answer[i - 1] = leftNum;
            leftNum--;
        }
        for(let i=Math.round(num/2); i<num; i++){
            answer[i] = rightNum + 1;
            rightNum++;
        }
    }
    
    return answer;
}
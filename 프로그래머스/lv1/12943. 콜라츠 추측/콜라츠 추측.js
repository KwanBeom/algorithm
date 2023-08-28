function solution(num) {
    var answer = 0;
    if(num === 1) return 0
    while(true){
        if(num%2 === 0) num = num / 2; 
        else num = (num*3) + 1;
        
        answer++;
        if(num === 1) return answer;
        if(answer >= 500) break;
    }
    return -1;
}
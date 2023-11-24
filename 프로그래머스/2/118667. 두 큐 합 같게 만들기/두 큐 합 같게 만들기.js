function solution(queue1, queue2) {
    let result = 0;
    let start = 0; 
    let end = queue1.length;
    const queue = [...queue1, ...queue2];
    const pointer = queue.reduce((a,c) => a+c, 0)/2;
    let sum = queue.slice(start, end).reduce((a,c) => a+c, 0);
    
    while(end < queue.length) {
        if(sum === pointer) {
            return result
        } else if(sum < pointer) {
            sum += queue[end];
            end++;
        } else if(sum > pointer) {
            sum -= queue[start];
            start++;
        }
        
        result++;
    }
    
    return -1;
}
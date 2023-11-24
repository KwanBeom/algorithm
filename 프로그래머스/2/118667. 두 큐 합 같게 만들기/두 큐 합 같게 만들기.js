function solution(queue1, queue2) {
    const queue = [...queue1, ...queue2];
    const pointer = queue.reduce((a,c)=>a+c,0) / 2;
    let start = 0;
    let end = queue1.length;
    let count = 0;
    let total = queue.slice(start, end).reduce((acc, cur) => acc+cur, 0);
    
    while (end < queue.length) {
        if(total === pointer) return count;
        
        if (total < pointer) {
            total += queue[end];
            end++;
        } else if (total > pointer) {
            total -= queue[start];
            start++;
        }
        
        count++;
    }
    return -1;
}
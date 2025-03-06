function solution(bridge_length, weight, truck_weights) {
    const bridge = new Array(bridge_length).fill(0);
    let sec = 0;
    let sum = 0;
    
    while (truck_weights.length > 0) {
        sum -= bridge.shift();
        const temp = sum + truck_weights[0];
        
        if(temp <= weight) {
            const tw = truck_weights.shift()
            bridge.push(tw);
            sum += tw;
        } else {
            bridge.push(0);
        }
        
        sec++;
    }

    return sec + bridge_length;
}
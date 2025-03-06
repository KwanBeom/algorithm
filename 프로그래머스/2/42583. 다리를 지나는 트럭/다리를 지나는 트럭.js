function solution(bridge_length, weight, truck_weights) {
    let time = 0;  
    let sum = 0;  
    const queue = [];  // 다리 위 트럭을 관리하는 큐

    while (truck_weights.length > 0 || queue.length > 0) {
        // 1초 경과
        time++;

        // 다리를 건너는 트럭 중, 맨 앞 트럭이 다리를 건너면 제거
        if (queue.length > 0 && queue[0].endTime === time) {
            sum -= queue.shift().weight;
        }

        // 새로운 트럭을 다리에 올릴 수 있는지 확인
        if (truck_weights.length > 0 && sum + truck_weights[0] <= weight) {
            const currentTruck = truck_weights.shift();
            sum += currentTruck;
            queue.push({ weight: currentTruck, endTime: time + bridge_length });
        }
    }

    return time;
}
function solution(prices) {
    const stack = [];
    const result = Array(prices.length).fill(0);

    for (let sec = 0; sec < prices.length; sec++) {
        const cp = prices[sec];

        while (stack.length && prices[stack[stack.length - 1]] > cp) {
            const topIndex = stack.pop();
            result[topIndex] = sec - topIndex;
        }

        stack.push(sec);
    }

    while (stack.length) {
        const topIndex = stack.pop();
        result[topIndex] = prices.length - 1 - topIndex;
    }

    return result;
}
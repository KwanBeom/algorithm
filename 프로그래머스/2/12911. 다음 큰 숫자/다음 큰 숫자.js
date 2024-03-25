const binaryOneCount = (num) => Array.from(num.toString(2), (num) => num == 1).filter(Boolean).length;

function solution(n) {
    let nextNumber = n + 1;
    const nBinaryOneCount = binaryOneCount(n);
    
    while(true) {
        const isSameBinaryOneCount = binaryOneCount(nextNumber) === nBinaryOneCount;
        if(isSameBinaryOneCount) return nextNumber;
        nextNumber += 1;
    }
}
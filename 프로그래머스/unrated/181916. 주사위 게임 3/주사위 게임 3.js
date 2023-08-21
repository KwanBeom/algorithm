function solution(a, b, c, d) {
    const arr = [a,b,c,d];
    const set = new Set();
    
    for(let i=0; i<4; i++){
        for(let j=0; j<4; j++){
            if(i !== j && arr[i] === arr[j]) set.add(arr[i]);
        }
    }
    
    const numCount = arr.filter(num => set.has(num)).length + set.size;
    const sameNumbers = [...set];
    
    switch(numCount){
        case 0:
            return Math.min(a,b,c,d)
        case 3:
            const leftNum = arr.filter(num => num !== sameNumbers[0])
            return leftNum[0] * leftNum[1]
        case 4:
            return (10 * sameNumbers[0] + Number(arr.filter(num => num !== sameNumbers[0]).join(''))) ** 2
        case 5:
            return 1111 * (a+b+c+d)/4;
        case 6:
            const t = set.values();
            const num1 = t.next().value;
            const num2 = t.next().value;
            return Math.abs((num1 + num2) * (num1 - num2));
        default:
            break;
    }
}
function solution(bin1, bin2) {
    var answer = '';

    return coversionBin(conversionDem(bin1) + conversionDem(bin2));
}

const coversionBin = (dem) => {
    let bin = ''
    let 나머지;
    
    while(true){        
        나머지 = dem % 2;
        dem = parseInt(dem / 2);
        bin += 나머지

        if(dem === 0) break
    }
    
    return bin.split('').reverse().join('')
}

const conversionDem = (bin) => {
    const arr = [];
    let num = 1;
    for(let i=bin.length - 1; i>=0; i--){
        arr.push(bin[i] === '1' ? num : 0);
        num *= 2;
    }
    return arr.reduce((acc, cur) => acc + cur, 0)
}
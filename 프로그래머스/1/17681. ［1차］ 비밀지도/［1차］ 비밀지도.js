function solution(n, arr1, arr2) {
    return arr1.map((num, idx) => {        
        return [...(num | arr2[idx]).toString(2).padStart(n, '0')]
            .map(v => v === '1' ? '#' : ' ').join('');
    });
}
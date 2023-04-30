function solution(arr) {
    return arr.map(item => {
        return item>=50 && item%2===0 ? item/2 : 
            item<=50 && item%2 === 1 ? item * 2 : item
    });
}
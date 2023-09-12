function solution(array) {
    const set = new Set(array);
    const arr = new Array(set.size).fill().map(v => new Array(2).fill(0));
    let time = 0;
    let num = 0;
    
    set.forEach(v => {
        const leng = array.filter(num => num === v).length;
        arr[num] = [v, leng]
        if(leng > time) time = leng;
        num++;
    });
    
    const filterArr = arr.filter(([_, curTime]) => curTime === time);

    return filterArr.length > 1 ? -1 : filterArr[0][0]
}
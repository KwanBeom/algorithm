function solution(array) {
    // set 객체를 만들어줍니다 
    const set = new Set(array);
    // 배열을 만들어줍니다 사이즈는 [[0,0],[0,0],[0,0],[0,0]]
    const arr = new Array(set.size).fill().map(v => new Array(2).fill(0));
    // 넘버가 등장하는 최대빈도수
    let time = 0; // 4
    
    let num = 0;


    set.forEach(v => {
        const leng = array.filter(num => num === v).length;
        arr[num] = [v, leng]
        if(leng > time) time = leng;
        num++;
    });
    // [등장한숫자, 빈도수] [1, 3]
    const filterArr = arr.filter(([_, curTime]) => curTime === time);
    
    return filterArr.length > 1 ? -1 : filterArr[0][0]
}
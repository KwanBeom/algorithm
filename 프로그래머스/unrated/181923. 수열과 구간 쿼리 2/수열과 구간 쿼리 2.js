function solution(arr, queries) {
    return queries.map(([s, e, k]) => {
        const fArr = arr.filter((num, i) => s <= i && i <= e && k < num).sort((a,b) => a-b);
        return fArr.length ? fArr[0] : -1;
    })
}
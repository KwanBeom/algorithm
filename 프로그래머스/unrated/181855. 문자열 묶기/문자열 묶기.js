function solution(strArr) {
    let length = 0;
    for(let i=0; i<Math.max(...strArr.map(v => v.length)); i++){
        const groupSize = strArr.filter(v=>v.length === i+1)
        if(length < groupSize.length) length = groupSize.length
    }
    return length
}
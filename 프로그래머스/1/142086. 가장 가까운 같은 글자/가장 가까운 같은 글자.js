function solution(s) {
    return [...s].map((v,idx) => {
        if(s.indexOf(v) !== idx) {
            const sliceStr = s.slice(0, idx)
            return sliceStr.length-sliceStr.lastIndexOf(v)
        }
        else return -1
    })
}
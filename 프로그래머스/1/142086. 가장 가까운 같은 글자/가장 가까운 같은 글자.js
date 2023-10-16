function solution(s) {
    return [...s].map((v,idx) => {
        if(s.indexOf(v) !== idx) {
            const sliceStr = s.slice(0, idx)
            return idx-sliceStr.lastIndexOf(v)
        }
        else return -1
    })
}
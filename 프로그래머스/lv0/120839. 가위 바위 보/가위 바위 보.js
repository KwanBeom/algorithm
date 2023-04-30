function solution(rsp) {
    let a= rsp.split('')
    return a.map(item => {
        return item == 2 ? "0" : item == 0 ? "5" : item == 5 ? "2" : 0
    }).join('')
}
                             
                    
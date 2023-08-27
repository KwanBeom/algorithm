function solution(myStr) {
    const arr = myStr.split(/[a-c]/g).filter(v => !!v)
    return arr.length ? arr : ["EMPTY"]
}
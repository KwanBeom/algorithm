function solution(myStr) {
    const arr = myStr.split('a').map(v =>  v.split('b')).flat().map(v => v.split('c')).flat().filter(v => !!v)

    return arr.length ? arr : ["EMPTY"]
}
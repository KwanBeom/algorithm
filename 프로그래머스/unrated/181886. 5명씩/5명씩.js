function solution(names) {
    return names.filter((_, idx) => {
        return idx%5 === 0
    })
}
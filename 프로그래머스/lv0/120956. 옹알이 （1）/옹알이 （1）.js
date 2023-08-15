function solution(babbling) {
    let result = 0
    let po = []
    const arr = ['aya', 'ye', 'woo', 'ma'];
    babbling.map(word => {
            const reg = /aya|ye|woo|ma/g
            po.push(word.replaceAll(reg, ''))
    })
    return po.filter(v => v === "").length
}
function solution(order) {
    const reg = /hot|ice/g
    const price = {
        americano: 4500,
        cafelatte: 5000,
        anything: 4500,
    }
    return order.map(item => item.replace(reg, '')).reduce((acc,cur) => acc + price[cur], 0)
}
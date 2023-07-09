function solution(box, n) {
    const [가로, 세로, 높이] = box
    return ~~(가로/n) * ~~(세로/n) * ~~(높이/n)
}
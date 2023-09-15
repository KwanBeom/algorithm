function solution(picture, k) {
    return picture.map((v,i) => Array(k).fill([...v].map(v => v.repeat(k)).join(''))).flat()
}
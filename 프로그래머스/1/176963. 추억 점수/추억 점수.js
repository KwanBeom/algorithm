function solution(name, yearning, photo) {
    return photo.map(arr => arr.reduce((a,c) => a += yearning[name.indexOf(c)] ?? 0, 0))
}
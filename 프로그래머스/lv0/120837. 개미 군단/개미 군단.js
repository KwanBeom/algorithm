function solution(hp) {
    let 장군 = 5
    let 병정 = 3
    let 필요한장군 = Math.floor(hp / 장군)
    let 필요한병정 = Math.floor((hp - (장군 * 필요한장군)) / 병정)
    let 필요한일개미 = hp - ((장군 * 필요한장군) + (병정 * 필요한병정))
    return 필요한장군+필요한병정+필요한일개미
}